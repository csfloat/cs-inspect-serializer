import { Buffer } from "buffer";
import { CEconItemPreviewDataBlock } from "./econ";
import { bytesToFloat, getChecksum } from "./inspect-payload";

const normalizeDecodedEcon = (econ: CEconItemPreviewDataBlock): CEconItemPreviewDataBlock => {
	return {
		...econ,
		paintwear: econ.paintwear === undefined ? undefined : bytesToFloat(econ.paintwear),
	};
};

const isDecodedInspectPayload = (econ: CEconItemPreviewDataBlock): boolean => {
	return (
		econ.itemid !== undefined ||
		econ.defindex !== undefined ||
		econ.paintindex !== undefined ||
		econ.paintseed !== undefined ||
		econ.stickers.length > 0 ||
		econ.keychains.length > 0
	);
};

const assertValidHex = (hex: string): void => {
	if (!/^[0-9A-F]+$/i.test(hex) || hex.length % 2 !== 0) {
		throw new Error("Invalid inspect hex payload");
	}
};

const decodeURIComponentSafely = (value: string): string => {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
};

const extractHexFromLink = (link: string): string => {
	const decodedLink = decodeURIComponentSafely(link.trim());
	const linkMatch = decodedLink.match(
		/^(?:steam:\/\/(?:run|rungame)\/730\/(?:76561202255233023\/)?\/?)?\+?csgo_econ_action_preview\s+([0-9A-F]+)$/i
	);

	if (linkMatch?.[1]) {
		assertValidHex(linkMatch[1]);
		return linkMatch[1];
	}

	throw new Error("Invalid inspect link");
};

const decodePayload = (payload: Uint8Array): CEconItemPreviewDataBlock => {
	const econ = normalizeDecodedEcon(CEconItemPreviewDataBlock.fromBinary(payload));

	if (!isDecodedInspectPayload(econ)) {
		throw new Error("Invalid inspect hex payload");
	}

	return econ;
};

const decodeBuffer = (buffer: Buffer, validateChecksum: boolean): CEconItemPreviewDataBlock => {
	if (buffer.length < 5 || buffer[0] !== 0) {
		throw new Error("Invalid inspect hex payload");
	}

	const payload = buffer.subarray(1, -4);

	if (validateChecksum) {
		const expectedChecksum = buffer.readUInt32BE(buffer.length - 4);
		const actualChecksum = getChecksum(payload);

		if (expectedChecksum !== actualChecksum) {
			throw new Error("Inspect hex checksum mismatch");
		}
	}

	return decodePayload(payload);
};

const unwrapMaskedPayload = (buffer: Buffer): Uint8Array => {
	if (buffer.length >= 5 && buffer[0] === 0) {
		return buffer.subarray(1, -4);
	}

	return buffer;
};

const decodeMaskedBuffer = (buffer: Buffer): CEconItemPreviewDataBlock => {
	return decodePayload(unwrapMaskedPayload(buffer));
};

const xorMaskBuffer = (buffer: Buffer, key: number): Buffer => {
	return Buffer.from(buffer.map((byte) => byte ^ key));
};

export const decodeHex = (hex: string): CEconItemPreviewDataBlock => {
	const normalizedHex = hex.trim();
	assertValidHex(normalizedHex);

	const buffer = Buffer.from(normalizedHex, "hex");
	const candidates = [
		() => decodeBuffer(buffer, true),
		() => decodeMaskedBuffer(buffer),
		() => decodeMaskedBuffer(xorMaskBuffer(buffer, buffer[0])),
	];

	let lastError: unknown;

	for (const candidate of candidates) {
		try {
			return candidate();
		} catch (error) {
			lastError = error;
		}
	}

	throw lastError instanceof Error ? lastError : new Error("Invalid inspect hex payload");
};

export const decodeLink = (link: string): CEconItemPreviewDataBlock => {
	return decodeHex(extractHexFromLink(link));
};
