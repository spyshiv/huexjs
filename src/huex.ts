export type RGB = { r: number; g: number; b: number };
export type HSL = { h: number; s: number; l: number };
export type CMYK = { c: number; m: number; y: number; k: number };
export type HSV = { h: number; s: number; v: number };

export function hexToRgb(hex: string): RGB | null {
    let cleanedHex = hex.replace(/^#/, '');
    if (cleanedHex.length === 3) {
        cleanedHex = cleanedHex.split('').map(c => c + c).join('');
    }
    if (!/^([0-9A-F]{6})$/i.test(cleanedHex)) {
        return null;
    }
    return {
        r: parseInt(cleanedHex.substring(0, 2), 16),
        g: parseInt(cleanedHex.substring(2, 4), 16),
        b: parseInt(cleanedHex.substring(4, 6), 16),
    };
}

export function rgbToHex({ r, g, b }: RGB): string {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
}

export function rgbToHsl({ r, g, b }: RGB): HSL {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h *= 60;
    }
    return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (h < 60) { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else { r = c; b = x; }

    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255)
    };
}

export function rgbToCmyk({ r, g, b }: RGB): CMYK {
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    let k = Math.min(c, m, y);
    if (k === 1) return { c: 0, m: 0, y: 0, k: 1 };
    return {
        c: Math.round(((c - k) / (1 - k)) * 100),
        m: Math.round(((m - k) / (1 - k)) * 100),
        y: Math.round(((y - k) / (1 - k)) * 100),
        k: Math.round(k * 100),
    };
}

export function cmykToRgb({ c, m, y, k }: CMYK): RGB {
    return {
        r: Math.round(255 * (1 - c / 100) * (1 - k / 100)),
        g: Math.round(255 * (1 - m / 100) * (1 - k / 100)),
        b: Math.round(255 * (1 - y / 100) * (1 - k / 100)),
    };
}

export function rgbToHsv({ r, g, b }: RGB): HSV {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, v = max;
    let d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max !== min) {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h *= 60;
    }
    return { h: Math.round(h), s: Math.round(s * 100), v: Math.round(v * 100) };
}

export function hsvToRgb({ h, s, v }: HSV): RGB {
    s /= 100;
    v /= 100;
    let c = v * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = v - c;
    let r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else { r = c; b = x; }
    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255)
    };
}
