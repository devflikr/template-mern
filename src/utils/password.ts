import { compare, hash } from "bcrypt";

import throwError from "../tools/error";
import { ExpressRequest, ExpressResponse } from "../types/Express";
import ENV from "../config";

class Password {
    constructor() {}

    async secure(req: ExpressRequest, res: ExpressResponse, password: string) {
        try {
            return await hash(password, +(ENV.bcrypt || 10) || 10);
        } catch (error) {
            console.log(error);
            throwError(req, res, "Failed to encrypt password");
        }
    }

    async secureValidatePassword(
        req: ExpressRequest,
        res: ExpressResponse,
        hashedPassword: string,
        password: string
    ) {
        try {
            return await compare(password, hashedPassword);
        } catch (error) {
            console.log(error);
            throwError(req, res, "Password doesn't match");
        }
    }
}

export default Password;
