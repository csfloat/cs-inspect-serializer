import { CEconItemPreviewDataBlock } from "./econ";
import CRC32 from "crc-32";
import { Buffer } from "buffer";

export const previewLink = "steam://rungame/730/76561202255233023/+csgo_econ_action_preview";

const floatToBytes = (floatValue: number): number => {
	const floatArray = new Float32Array(1);
	floatArray[0] = floatValue;
	const byteArray = new Uint32Array(floatArray.buffer);
	return byteArray[0];
};

/**
 * Creates the hex representation of the inspect data
 * @args {@link CEconItemPreviewDataBlock}
 * @returns {string} example: "00180720C80A280638A4E1F5FB03409A0562040800104C62040801104C62040802104C62040803104C6D4F5E30""
 */
const generateHex = ({ paintwear = 0.001, ...props }: CEconItemPreviewDataBlock): string => {
	const econ: CEconItemPreviewDataBlock = {
		...props,
		paintwear: floatToBytes(paintwear),
	};

	const payload = CEconItemPreviewDataBlock.toBinary(econ);
	const bufferPayload = Buffer.concat([Uint8Array.from([0]), payload]);

	const crc = CRC32.buf(bufferPayload);
	const x_crc = (crc & 0xffff) ^ (payload.byteLength * crc);

	const crcBuffer = Buffer.alloc(4);
	crcBuffer.writeUInt32BE((x_crc & 0xffffffff) >>> 0, 0);

	return Buffer.concat([bufferPayload, crcBuffer]).toString("hex").toUpperCase();
};

/**
 * Generates the inspect link
 * @args {@link CEconItemPreviewDataBlock}
 * @returns {string} "steam://rungame/730/76561202255233023/+csgo_econ_action_preview 00180720C80A280638A4E1F5FB03409A0562040800104C62040801104C62040802104C62040803104C6D4F5E30"
 */
const generateLink = (props: CEconItemPreviewDataBlock): string => {
	const hex = generateHex(props);

	return `${previewLink} ${hex}`;
};

export { generateHex, generateLink };
