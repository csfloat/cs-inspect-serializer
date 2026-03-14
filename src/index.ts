import { CEconItemPreviewDataBlock } from "./econ";
import { Buffer } from "buffer";
import { decodeHex, decodeLink } from "./decode";
import { floatToBytes, getChecksum } from "./inspect-payload";

export const previewLink = "steam://rungame/730/76561202255233023/+csgo_econ_action_preview";

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
	const crcBuffer = Buffer.alloc(4);
	crcBuffer.writeUInt32BE(getChecksum(payload), 0);

	return Buffer.concat([Uint8Array.from([0]), payload, crcBuffer]).toString("hex").toUpperCase();
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

export { decodeHex, decodeLink, generateHex, generateLink, CEconItemPreviewDataBlock };
