import { generateLink, generateHex, previewLink } from "../src";
import { CEconItemPreviewDataBlock } from "../src/econ";

describe("CS Inspect Serializer", () => {
	describe("Hex Generation", () => {
		it("should generate correct hex without stickers", () => {
			const hex = generateHex({
				defindex: 7,
				paintindex: 474,
				paintseed: 306,
				paintwear: 0.6336590647697449,
				rarity: 6,
				stickers: [],
				keychains: [],
			});
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
			});
			expect(hex).toMatch(/^[0-9A-F]+$/i); // Should be a valid hex string
		});
	});

	describe("Link Generation", () => {
		it("should generate correct inspect link", () => {
			const props: CEconItemPreviewDataBlock = {
				defindex: 7,
				paintindex: 474,
				paintseed: 306,
				paintwear: 0.6336590647697449,
				rarity: 6,
				stickers: [],
				keychains: [],
			};
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
			});
			expect(hex).toMatch(/^[0-9A-F]+$/i);
		});
	});
});
