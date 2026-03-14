# CS2 Inspect Link Serializer

Lightweight serializer and decoder for CS2 inspect links. Fork of the package
[cs2-inspect-create](https://github.com/candyboyz/cs2-inspect-create).

# Installation

```bash
npm i @csfloat/cs2-inspect-serializer
```

# Usage

See the [tests](tests/gen.test.ts) for examples.

```ts
import { decodeHex, decodeLink, generateHex, generateLink } from "@csfloat/cs2-inspect-serializer";

const props = {
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

decodeHex(hex);
decodeLink(link);
```

# Development

```bash
# Generate the protobuf file based on econ.proto
npm run protoc
# Build the project
npm run build
# Run the tests
npm run test
```
