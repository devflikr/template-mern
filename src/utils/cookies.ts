import { CookieOptions } from "express";
import { ExpressResponse } from "../types/Express";
import ENV from "../config";

export default function setResponseCookies(
    res: ExpressResponse,
    name: string,
    value: string | number | null,
    config: CookieOptions = {}
) {
    return res.cookie(name, value, {
        domain: ENV.cookieRegex,
        expires:
            value == null
                ? new Date(Date.now() - 1000)
                : new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        sameSite: ENV.mode === "dev" ? "none" : "lax",
        httpOnly: ENV.mode === "dev",
        secure: ENV.mode === "dev",
        ...config,
    });
}
