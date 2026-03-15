// src/econ.ts
import { MessageType } from "@protobuf-ts/runtime";
var CEconItemPreviewDataBlock$Type = class extends MessageType {
  constructor() {
    super("CEconItemPreviewDataBlock", [
      {
        no: 1,
        name: "accountid",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 2,
        name: "itemid",
        kind: "scalar",
        opt: true,
        T: 4,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 3,
        name: "defindex",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 4,
        name: "paintindex",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 5,
        name: "rarity",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 6,
        name: "quality",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 7,
        name: "paintwear",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 8,
        name: "paintseed",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 9,
        name: "killeaterscoretype",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 10,
        name: "killeatervalue",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 11,
        name: "customname",
        kind: "scalar",
        opt: true,
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 12, name: "stickers", kind: "message", repeat: 2, T: () => CEconItemPreviewDataBlock_Sticker },
      {
        no: 13,
        name: "inventory",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 14,
        name: "origin",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 15,
        name: "questid",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 16,
        name: "dropreason",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 17,
        name: "musicindex",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 18,
        name: "entindex",
        kind: "scalar",
        opt: true,
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 19,
        name: "petindex",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      { no: 20, name: "keychains", kind: "message", repeat: 2, T: () => CEconItemPreviewDataBlock_Sticker },
      {
        no: 21,
        name: "style",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      { no: 22, name: "variations", kind: "message", repeat: 2, T: () => CEconItemPreviewDataBlock_Sticker },
      {
        no: 23,
        name: "upgrade_level",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      }
    ]);
  }
};
var CEconItemPreviewDataBlock = new CEconItemPreviewDataBlock$Type();
var CEconItemPreviewDataBlock_Sticker$Type = class extends MessageType {
  constructor() {
    super("CEconItemPreviewDataBlock.Sticker", [
      {
        no: 1,
        name: "slot",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 2,
        name: "sticker_id",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 3,
        name: "wear",
        kind: "scalar",
        opt: true,
        T: 2
        /*ScalarType.FLOAT*/
      },
      {
        no: 4,
        name: "scale",
        kind: "scalar",
        opt: true,
        T: 2
        /*ScalarType.FLOAT*/
      },
      {
        no: 5,
        name: "rotation",
        kind: "scalar",
        opt: true,
        T: 2
        /*ScalarType.FLOAT*/
      },
      {
        no: 6,
        name: "tint_id",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 7,
        name: "offset_x",
        kind: "scalar",
        opt: true,
        T: 2
        /*ScalarType.FLOAT*/
      },
      {
        no: 8,
        name: "offset_y",
        kind: "scalar",
        opt: true,
        T: 2
        /*ScalarType.FLOAT*/
      },
      {
        no: 9,
        name: "offset_z",
        kind: "scalar",
        opt: true,
        T: 2
        /*ScalarType.FLOAT*/
      },
      {
        no: 10,
        name: "pattern",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 11,
        name: "highlight_reel",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 12,
        name: "wrapped_sticker",
        kind: "scalar",
        opt: true,
        T: 13
        /*ScalarType.UINT32*/
      }
    ]);
  }
};
var CEconItemPreviewDataBlock_Sticker = new CEconItemPreviewDataBlock_Sticker$Type();

// src/index.ts
import { Buffer as Buffer3 } from "buffer";

// src/decode.ts
import { Buffer as Buffer2 } from "buffer";

// src/inspect-payload.ts
import CRC32 from "crc-32";
import { Buffer } from "buffer";
var floatToBytes = (floatValue) => {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setFloat32(0, floatValue, true);
  return view.getUint32(0, true);
};
var bytesToFloat = (uintValue) => {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setUint32(0, uintValue, true);
  return view.getFloat32(0, true);
};
var getChecksum = (payload) => {
  const bufferPayload = Buffer.concat([Uint8Array.from([0]), payload]);
  const crc = CRC32.buf(bufferPayload);
  const x_crc = crc & 65535 ^ payload.byteLength * crc;
  return (x_crc & 4294967295) >>> 0;
};

// src/decode.ts
var normalizeDecodedEcon = (econ) => {
  return {
    ...econ,
    paintwear: econ.paintwear === void 0 ? void 0 : bytesToFloat(econ.paintwear)
  };
};
var hasDecodedInspectPayload = (econ) => {
  return econ.itemid !== void 0 || econ.defindex !== void 0 || econ.paintindex !== void 0 || econ.paintseed !== void 0 || econ.stickers.length > 0 || econ.keychains.length > 0 || econ.variations.length > 0;
};
var assertValidHex = (hex) => {
  if (!/^[0-9A-F]+$/i.test(hex) || hex.length % 2 !== 0) {
    throw new Error("Invalid inspect hex payload");
  }
};
var decodeURIComponentSafely = (value) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};
var extractHexFromLink = (link) => {
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
var decodePayload = (payload, isValidPayload) => {
  const econ = normalizeDecodedEcon(CEconItemPreviewDataBlock.fromBinary(payload));
  if (!isValidPayload(econ)) {
    throw new Error("Invalid inspect hex payload");
  }
  return econ;
};
var decodeWrappedBuffer = (buffer) => {
  if (buffer.length < 5 || buffer[0] !== 0) {
    throw new Error("Invalid inspect hex payload");
  }
  const payload = buffer.subarray(1, -4);
  const expectedChecksum = buffer.readUInt32BE(buffer.length - 4);
  const actualChecksum = getChecksum(payload);
  if (expectedChecksum !== actualChecksum) {
    throw new Error("Inspect hex checksum mismatch");
  }
  return decodePayload(payload, hasDecodedInspectPayload);
};
var isDecodedMaskedInspectPayload = (econ) => {
  return econ.itemid !== void 0 && econ.defindex !== void 0 && econ.paintindex !== void 0 && econ.inventory !== void 0 && econ.origin !== void 0;
};
var decodeMaskedBuffer = (buffer) => {
  if (buffer.length < 5) {
    throw new Error("Invalid inspect hex payload");
  }
  const unmaskedBuffer = xorMaskBuffer(buffer, buffer[0]);
  if (unmaskedBuffer[0] !== 0) {
    throw new Error("Invalid inspect hex payload");
  }
  return decodePayload(unmaskedBuffer.subarray(1, -4), isDecodedMaskedInspectPayload);
};
var xorMaskBuffer = (buffer, key) => {
  return Buffer2.from(buffer.map((byte) => byte ^ key));
};
var decodeHex = (hex) => {
  const normalizedHex = hex.trim();
  assertValidHex(normalizedHex);
  const buffer = Buffer2.from(normalizedHex, "hex");
  if (buffer[0] === 0) {
    return decodeWrappedBuffer(buffer);
  }
  return decodeMaskedBuffer(buffer);
};
var decodeLink = (link) => {
  return decodeHex(extractHexFromLink(link));
};

// src/index.ts
var previewLink = "steam://rungame/730/76561202255233023/+csgo_econ_action_preview";
var generateHex = ({ paintwear = 1e-3, ...props }) => {
  const econ = {
    ...props,
    paintwear: floatToBytes(paintwear)
  };
  const payload = CEconItemPreviewDataBlock.toBinary(econ);
  const crcBuffer = Buffer3.alloc(4);
  crcBuffer.writeUInt32BE(getChecksum(payload), 0);
  return Buffer3.concat([Uint8Array.from([0]), payload, crcBuffer]).toString("hex").toUpperCase();
};
var generateLink = (props) => {
  const hex = generateHex(props);
  return `${previewLink} ${hex}`;
};
export {
  CEconItemPreviewDataBlock,
  decodeHex,
  decodeLink,
  generateHex,
  generateLink,
  previewLink
};
