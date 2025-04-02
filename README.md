# 🌈 huexjs – The Ultimate Color Converter Library 🎨

**huexjs** is a lightweight and efficient TypeScript library for seamless color conversions. Easily convert colors between HEX, RGB, HSL, CMYK, and HSV with precision. Designed for developers who need a reliable and fast solution for color transformations in web applications.

## ✨ Features

- Convert between **HEX, RGB, HSL, CMYK, and HSV** formats
- Lightweight and **zero dependencies**
- Supports **TypeScript** for strong type safety
- Works in **Node.js and browsers**

## 📦 Installation

```sh
npm install huexjs
```

## 🚀 Usage

```javascript
import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  rgbToCmyk,
  cmykToRgb,
  rgbToHsv,
  hsvToRgb
} from "huexjs";

// Convert HEX to RGB
console.log(hexToRgb("#ff5733")); // { r: 255, g: 87, b: 51 }

// Convert RGB to HEX
console.log(rgbToHex({ r: 255, g: 87, b: 51 })); // #FF5733

// Convert RGB to HSL
console.log(rgbToHsl({ r: 255, g: 87, b: 51 })); // { h: 11, s: 100, l: 60 }

// Convert HSL to RGB
console.log(hslToRgb({ h: 11, s: 100, l: 60 })); // { r: 255, g: 87, b: 51 }

// Convert RGB to CMYK
console.log(rgbToCmyk({ r: 255, g: 87, b: 51 })); // { c: 0, m: 66, y: 80, k: 0 }

// Convert CMYK to RGB
console.log(cmykToRgb({ c: 0, m: 66, y: 80, k: 0 })); // { r: 255, g: 87, b: 51 }

// Convert RGB to HSV
console.log(rgbToHsv({ r: 255, g: 87, b: 51 })); // { h: 11, s: 80, v: 100 }

// Convert HSV to RGB
console.log(hsvToRgb({ h: 11, s: 80, v: 100 })); // { r: 255, g: 87, b: 51 }
```

## 📜 License

MIT License

> 🔥 **huexjs** – Simplify color conversions in your projects!
