import { MessageType } from '@protobuf-ts/runtime';

declare class CEconItemPreviewDataBlock$Type extends MessageType<CEconItemPreviewDataBlock> {
    constructor();
}
/**
 * @generated from protobuf message CEconItemPreviewDataBlock
 */
interface CEconItemPreviewDataBlock {
    /**
     * @generated from protobuf field: optional uint32 accountid = 1
     */
    accountid?: number;
    /**
     * @generated from protobuf field: optional uint64 itemid = 2
     */
    itemid?: bigint;
    /**
     * @generated from protobuf field: optional uint32 defindex = 3
     */
    defindex?: number;
    /**
     * @generated from protobuf field: optional uint32 paintindex = 4
     */
    paintindex?: number;
    /**
     * @generated from protobuf field: optional uint32 rarity = 5
     */
    rarity?: number;
    /**
     * @generated from protobuf field: optional uint32 quality = 6
     */
    quality?: number;
    /**
     * @generated from protobuf field: optional uint32 paintwear = 7
     */
    paintwear?: number;
    /**
     * @generated from protobuf field: optional uint32 paintseed = 8
     */
    paintseed?: number;
    /**
     * @generated from protobuf field: optional uint32 killeaterscoretype = 9
     */
    killeaterscoretype?: number;
    /**
     * @generated from protobuf field: optional uint32 killeatervalue = 10
     */
    killeatervalue?: number;
    /**
     * @generated from protobuf field: optional string customname = 11
     */
    customname?: string;
    /**
     * @generated from protobuf field: repeated CEconItemPreviewDataBlock.Sticker stickers = 12
     */
    stickers: CEconItemPreviewDataBlock_Sticker[];
    /**
     * @generated from protobuf field: optional uint32 inventory = 13
     */
    inventory?: number;
    /**
     * @generated from protobuf field: optional uint32 origin = 14
     */
    origin?: number;
    /**
     * @generated from protobuf field: optional uint32 questid = 15
     */
    questid?: number;
    /**
     * @generated from protobuf field: optional uint32 dropreason = 16
     */
    dropreason?: number;
    /**
     * @generated from protobuf field: optional uint32 musicindex = 17
     */
    musicindex?: number;
    /**
     * @generated from protobuf field: optional int32 entindex = 18
     */
    entindex?: number;
    /**
     * @generated from protobuf field: optional uint32 petindex = 19
     */
    petindex?: number;
    /**
     * @generated from protobuf field: repeated CEconItemPreviewDataBlock.Sticker keychains = 20
     */
    keychains: CEconItemPreviewDataBlock_Sticker[];
}
/**
 * @generated MessageType for protobuf message CEconItemPreviewDataBlock
 */
declare const CEconItemPreviewDataBlock: CEconItemPreviewDataBlock$Type;
declare class CEconItemPreviewDataBlock_Sticker$Type extends MessageType<CEconItemPreviewDataBlock_Sticker> {
    constructor();
}
/**
 * @generated from protobuf message CEconItemPreviewDataBlock.Sticker
 */
interface CEconItemPreviewDataBlock_Sticker {
    /**
     * @generated from protobuf field: optional uint32 slot = 1
     */
    slot?: number;
    /**
     * @generated from protobuf field: optional uint32 sticker_id = 2
     */
    stickerId?: number;
    /**
     * @generated from protobuf field: optional float wear = 3
     */
    wear?: number;
    /**
     * @generated from protobuf field: optional float scale = 4
     */
    scale?: number;
    /**
     * @generated from protobuf field: optional float rotation = 5
     */
    rotation?: number;
    /**
     * @generated from protobuf field: optional uint32 tint_id = 6
     */
    tintId?: number;
    /**
     * @generated from protobuf field: optional float offset_x = 7
     */
    offsetX?: number;
    /**
     * @generated from protobuf field: optional float offset_y = 8
     */
    offsetY?: number;
    /**
     * @generated from protobuf field: optional float offset_z = 9
     */
    offsetZ?: number;
    /**
     * @generated from protobuf field: optional uint32 pattern = 10
     */
    pattern?: number;
    /**
     * @generated from protobuf field: optional uint32 highlight_reel = 11
     */
    highlightReel?: number;
}
/**
 * @generated MessageType for protobuf message CEconItemPreviewDataBlock.Sticker
 */
declare const CEconItemPreviewDataBlock_Sticker: CEconItemPreviewDataBlock_Sticker$Type;

declare const decodeHex: (hex: string) => CEconItemPreviewDataBlock;
declare const decodeLink: (link: string) => CEconItemPreviewDataBlock;

declare const previewLink = "steam://rungame/730/76561202255233023/+csgo_econ_action_preview";
/**
 * Creates the hex representation of the inspect data
 * @args {@link CEconItemPreviewDataBlock}
 * @returns {string} example: "00180720C80A280638A4E1F5FB03409A0562040800104C62040801104C62040802104C62040803104C6D4F5E30""
 */
declare const generateHex: ({ paintwear, ...props }: CEconItemPreviewDataBlock) => string;
/**
 * Generates the inspect link
 * @args {@link CEconItemPreviewDataBlock}
 * @returns {string} "steam://rungame/730/76561202255233023/+csgo_econ_action_preview 00180720C80A280638A4E1F5FB03409A0562040800104C62040801104C62040802104C62040803104C6D4F5E30"
 */
declare const generateLink: (props: CEconItemPreviewDataBlock) => string;

export { CEconItemPreviewDataBlock, decodeHex, decodeLink, generateHex, generateLink, previewLink };
