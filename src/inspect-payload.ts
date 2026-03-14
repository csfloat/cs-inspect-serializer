import CRC32 from "crc-32";
import { Buffer } from "buffer";

export const floatToBytes = (floatValue: number): number => {
	const buffer = new ArrayBuffer(4);
	const view = new DataView(buffer);
	view.setFloat32(0, floatValue, true);
	return view.getUint32(0, true);
};

export const bytesToFloat = (uintValue: number): number => {
	const buffer = new ArrayBuffer(4);
	const view = new DataView(buffer);
	view.setUint32(0, uintValue, true);
	return view.getFloat32(0, true);
};

export const getChecksum = (payload: Uint8Array): number => {
	const bufferPayload = Buffer.concat([Uint8Array.from([0]), payload]);
	const crc = CRC32.buf(bufferPayload);
	const x_crc = (crc & 0xffff) ^ (payload.byteLength * crc);

	return (x_crc & 0xffffffff) >>> 0;
};
