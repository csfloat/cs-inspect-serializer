import { decodeHex, decodeLink, generateHex, generateLink, previewLink } from "../src";
import { CEconItemPreviewDataBlock } from "../src/econ";

describe("CS Inspect Serializer", () => {
	const props: CEconItemPreviewDataBlock = {
		defindex: 7,
		paintindex: 474,
		paintseed: 306,
		paintwear: 0.6336590647697449,
		rarity: 6,
		stickers: [],
		keychains: [],
		variations: [],
	};

	describe("Hex Generation", () => {
		it("should generate correct hex without stickers", () => {
			const hex = generateHex(props);
			expect(hex).toBe("00180720DA03280638FBEE88F90340B2026BC03C96");
		});

		it("should generate correct hex with stickers", () => {
			const hex = generateHex({
				defindex: 7,
				paintindex: 1352,
				paintseed: 666,
				paintwear: 0.99,
				rarity: 6,
				stickers: [
					{
						slot: 0,
						stickerId: 76,
					},
					{
						slot: 1,
						stickerId: 76,
					},
					{
						slot: 2,
						stickerId: 76,
					},
					{
						slot: 3,
						stickerId: 76,
					},
				],
				keychains: [],
				variations: [],
			});
			expect(hex).toBe("00180720C80A280638A4E1F5FB03409A0562040800104C62040801104C62040802104C62040803104C6D4F5E30");
		});

		it("should handle different rarity levels", () => {
			const hex = generateHex({
				defindex: 7,
				paintindex: 474,
				paintseed: 306,
				paintwear: 0.5,
				rarity: 4,
				stickers: [],
				keychains: [],
				variations: [],
			});
			expect(hex).toMatch(/^[0-9A-F]+$/i); // Should be a valid hex string
		});
	});

	describe("Link Generation", () => {
		it("should generate correct inspect link", () => {
			const hex = generateHex(props);
			const link = generateLink(props);

			expect(link).toBe(`${previewLink} ${hex}`);
		});

		it("should generate link with stickers", () => {
			const props: CEconItemPreviewDataBlock = {
				defindex: 7,
				paintindex: 1352,
				paintseed: 666,
				paintwear: 0.99,
				rarity: 6,
				stickers: [
					{
						slot: 0,
						stickerId: 76,
					},
				],
				keychains: [],
				variations: [],
			};
			const link = generateLink(props);

			expect(link).toContain(previewLink);
			expect(link).toMatch(/^steam:\/\/rungame\/730\/76561202255233023\/\+csgo_econ_action_preview\s[0-9A-F]+$/i);
		});
	});

	describe("Edge Cases", () => {
		it("should handle empty stickers and keychains", () => {
			const hex = generateHex({
				defindex: 1,
				paintindex: 0,
				paintseed: 0,
				paintwear: 0.5,
				rarity: 1,
				stickers: [],
				keychains: [],
				variations: [],
			});
			expect(hex).toMatch(/^[0-9A-F]+$/i);
		});
	});

	describe("Decoding", () => {
		const xorFirstByteHex =
			"E5F51125424F5EE4FDDAC54EECCDE7D5E9DD4E535413E6A507E687E0EDE4F571AE87E0EDE5F50CA787E0EDE6F55DAF87E0EDE1F571AF8D66656565E995ED47E4F3EDE5F5B6D85D0D17A5A07B6258DBA8B36B41A5BD7CE028CEE12E";

		it("should decode generated hex back into inspect data", () => {
			const decoded = decodeHex(generateHex(props));

			expect(decoded).toEqual(props);
		});

		it("should decode generated inspect links", () => {
			const decoded = decodeLink(generateLink(props));

			expect(decoded).toEqual(props);
		});

		it("should reject generated hex with an invalid checksum", () => {
			const hex = generateHex(props);
			const invalidHex = `${hex.slice(0, -1)}${hex.endsWith("0") ? "1" : "0"}`;

			expect(() => decodeHex(invalidHex)).toThrow("Inspect hex checksum mismatch");
		});

		it("should decode URL-encoded inspect links", () => {
			const decoded = decodeLink(encodeURI(generateLink(props)));

			expect(decoded).toEqual(props);
		});

		it("should decode inspect links with steam run prefix", () => {
			const decoded = decodeLink(generateLink(props).replace("steam://rungame/", "steam://run/"));

			expect(decoded).toEqual(props);
		});

		it("should decode masked inspect links that use a fixed XOR byte", () => {
			const link =
				"steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20CBDB3F0B6C6170CAD3F4EB60C2E3C9FBC7F3607D7A3DC88B29C8A9CEC3CADB5F80A9CEC3CBDB2289A9CEC3C8DB7381A9CEC3CFDB5F81A3484B4B4BC7BBC369CADDC3CBDB98F67323398B8E554C76F5869D456F8B9352CE341D4900";
			const decoded = decodeLink(link);

			expect(decoded.itemid).toBe(50286157940n);
			expect(decoded.defindex).toBe(63);
			expect(decoded.paintindex).toBe(1195);
			expect(decoded.rarity).toBe(2);
			expect(decoded.quality).toBe(12);
			expect(decoded.paintseed).toBe(482);
			expect(decoded.paintwear).toBeCloseTo(0.3991330564);
			expect(decoded.inventory).toBe(3221225475);
			expect(decoded.origin).toBe(8);
			expect(decoded.stickers).toEqual([
				{ slot: 1, stickerId: 9620 },
				{ slot: 0, stickerId: 8553 },
				{ slot: 3, stickerId: 9528 },
				{ slot: 4, stickerId: 9492 },
			]);
			expect(decoded.keychains).toHaveLength(1);
			expect(decoded.keychains[0]).toMatchObject({
				slot: 0,
				stickerId: 83,
				highlightReel: 665,
			});
			expect(decoded.keychains[0].offsetX).toBeCloseTo(7.5909080505);
			expect(decoded.keychains[0].offsetY).toBeCloseTo(0.3701753020);
			expect(decoded.keychains[0].offsetZ).toBeCloseTo(5.1423749924);
		});

		it("should decode masked inspect hex that uses the first payload byte as the XOR key", () => {
			const decoded = decodeHex(xorFirstByteHex);

			expect(decoded.itemid).toBe(50286157940n);
			expect(decoded.defindex).toBe(63);
			expect(decoded.paintindex).toBe(1195);
			expect(decoded.rarity).toBe(2);
			expect(decoded.quality).toBe(12);
			expect(decoded.paintseed).toBe(482);
			expect(decoded.paintwear).toBeCloseTo(0.3991330564);
			expect(decoded.inventory).toBe(3221225475);
			expect(decoded.origin).toBe(8);
			expect(decoded.stickers).toEqual([
				{ slot: 1, stickerId: 9620 },
				{ slot: 0, stickerId: 8553 },
				{ slot: 3, stickerId: 9528 },
				{ slot: 4, stickerId: 9492 },
			]);
			expect(decoded.keychains).toHaveLength(1);
			expect(decoded.keychains[0]).toMatchObject({
				slot: 0,
				stickerId: 83,
				highlightReel: 665,
			});
			expect(decoded.keychains[0].offsetX).toBeCloseTo(7.5909080505);
			expect(decoded.keychains[0].offsetY).toBeCloseTo(0.3701753020);
			expect(decoded.keychains[0].offsetZ).toBeCloseTo(5.1423749924);
		});

		it("should decode inspect links with steam run prefix", () => {
			const link =
				"steam://run/730//+csgo_econ_action_preview%207C6CF88390E2D17D64655C1C547D4C7844BE8B98897F3C8578145B0C64904061B1";
			const decoded = decodeLink(link);

			expect(decoded.itemid).toBe(46504034180n);
			expect(decoded.defindex).toBe(25);
			expect(decoded.paintindex).toBe(96);
			expect(decoded.rarity).toBe(1);
			expect(decoded.quality).toBe(4);
			expect(decoded.paintseed).toBe(633);
			expect(decoded.paintwear).toBeCloseTo(0.3617840409);
			expect(decoded.inventory).toBe(39);
			expect(decoded.origin).toBe(24);
			expect(decoded.stickers).toEqual([]);
			expect(decoded.keychains).toEqual([]);
		});

		it("should decode sticker inspect links", () => {
			const link = "steam://run/730//+csgo_econ_action_preview%203E2EEEE3AEC23526391E3E163E0E3A5C3B363E2E9A3A567A4E287F466EAE";
			const decoded = decodeLink(link);

			expect(decoded.itemid).toBe(3213110992n);
			expect(decoded.defindex).toBe(7);
			expect(decoded.paintindex).toBe(0);
			expect(decoded.rarity).toBe(0);
			expect(decoded.quality).toBe(4);
			expect(decoded.inventory).toBe(68);
			expect(decoded.origin).toBe(22);
			expect(decoded.paintwear).toBeUndefined();
			expect(decoded.stickers).toEqual([{ slot: 0, stickerId: 548 }]);
			expect(decoded.keychains).toEqual([]);
		});

		it("should decode souvenir keychain inspect links", () => {
			const link = "steam://run/730//+csgo_econ_action_preview%20A2B2A2BA69A882A28AA192AECAA2D2B700A3A5AAA2B286FA7BA0D684BE72";
			const decoded = decodeLink(link);

			expect(decoded.itemid).toBe(0n);
			expect(decoded.defindex).toBe(1355);
			expect(decoded.paintindex).toBe(0);
			expect(decoded.rarity).toBe(3);
			expect(decoded.quality).toBe(12);
			expect(decoded.inventory).toBe(0);
			expect(decoded.origin).toBe(21);
			expect(decoded.paintwear).toBeUndefined();
			expect(decoded.stickers).toEqual([]);
			expect(decoded.keychains).toEqual([{ slot: 0, stickerId: 36, highlightReel: 345 }]);
		});

		it("should reject arbitrary hex that only looks like a protobuf message", () => {
			expect(() => decodeHex("859F6DF769919C54")).toThrow("Invalid inspect hex payload");
		});

		it("should decode wrapped sticker and offsets", () => {
			const link = "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%200018082086012804300438FEFED4FA024094046209080010461D000000006213080110461D000000003D201CCA3C4500E9743B6213080210461D000000003D98AE883D450069793C6209080410461D000000006213080410461D000000003D646E393D45D402ABBDA2011A080010251D000000003DAEB1B6BE4529093A3F4D0825CC4060460D207F2C";
			const decoded = decodeLink(link);

			expect(decoded).not.toBeUndefined();
			expect(decoded.keychains[0].wrappedSticker).toEqual(70);
			expect(decoded.keychains[0].offsetX).toBeLessThan(0);
			expect(decoded.keychains[0].offsetY).toBeGreaterThan(0);
			expect(decoded.stickers.length).toEqual(5);
		});
	});
});
