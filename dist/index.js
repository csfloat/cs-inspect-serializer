"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CEconItemPreviewDataBlock: () => CEconItemPreviewDataBlock,
  decodeHex: () => decodeHex,
  decodeLink: () => decodeLink,
  generateHex: () => generateHex,
  generateLink: () => generateLink,
  previewLink: () => previewLink
});
module.exports = __toCommonJS(index_exports);

// src/econ.ts
var import_runtime = require("@protobuf-ts/runtime");
var CEconItemPreviewDataBlock$Type = class extends import_runtime.MessageType {
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
var CEconItemPreviewDataBlock_Sticker$Type = class extends import_runtime.MessageType {
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
var import_buffer3 = require("buffer");

// src/decode.ts
var import_buffer2 = require("buffer");

// src/inspect-payload.ts
var import_crc_32 = __toESM(require("crc-32"));
var import_buffer = require("buffer");
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
  const bufferPayload = import_buffer.Buffer.concat([Uint8Array.from([0]), payload]);
  const crc = import_crc_32.default.buf(bufferPayload);
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
  return import_buffer2.Buffer.from(buffer.map((byte) => byte ^ key));
};
var decodeHex = (hex) => {
  const normalizedHex = hex.trim();
  assertValidHex(normalizedHex);
  const buffer = import_buffer2.Buffer.from(normalizedHex, "hex");
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
  const crcBuffer = import_buffer3.Buffer.alloc(4);
  crcBuffer.writeUInt32BE(getChecksum(payload), 0);
  return import_buffer3.Buffer.concat([Uint8Array.from([0]), payload, crcBuffer]).toString("hex").toUpperCase();
};
var generateLink = (props) => {
  const hex = generateHex(props);
  return `${previewLink} ${hex}`;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CEconItemPreviewDataBlock,
  decodeHex,
  decodeLink,
  generateHex,
  generateLink,
  previewLink
});
