class Generator {
    constructor() {}

    randomString(length: number = 4, pattern: 1 | 2 | 3 | 4 | 5 = 3) {
        const characterSet =
            pattern === 1
                ? "abcdefghijklmnopqrstuvwxyz"
                : pattern === 2
                ? "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
                : pattern === 3
                ? "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
                : pattern === 4
                ? "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@!_-?.,"
                : pattern === 5
                ? "abcdef0123456789"
                : "";

        let result = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            result += characterSet.charAt(randomIndex);
        }

        return result;
    }

    randomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    contrastColor(hexColor: string) {
        const r = parseInt(hexColor.substring(1, 3), 16);
        const g = parseInt(hexColor.substring(3, 5), 16);
        const b = parseInt(hexColor.substring(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? "#000000" : "#FFFFFF";
    }

    randomColorWithContrast() {
        const color = this.randomColor();
        const contrast = this.contrastColor(color);
        return { color, contrast };
    }
}

export default Generator;
