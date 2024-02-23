import AES from "crypto-js/aes";
import encUtf8 from "crypto-js/enc-utf8";
import ENV from "../config";

class Crypto {
    constructor() {}

    secret = ENV.crypto || "devflikr";

    encrypt(inputString: string, secretKey: string = this.secret) {
        return AES.encrypt(inputString, secretKey).toString();
    }

    decrypt(encryptedString: string, secretKey: string = this.secret) {
        const decrypted = AES.decrypt(encryptedString, secretKey);
        if (decrypted) {
            try {
                const str = decrypted.toString(encUtf8);
                if (str.length > 0) return str;
            } catch (e) {
                return "";
            }
        }
        return "";
    }
}

export default Crypto;
