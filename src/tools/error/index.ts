import { ExpressRequest, ExpressResponse } from "../../types/Express";

function throwError(
    req: ExpressRequest,
    res: ExpressResponse,
    message?: unknown,
    code?: number,
    data?: unknown
) {
    return (
        res.status(code || 404).json({
            success: false,
            error: true,
            status: "error",
            message: message ?? "An unknown error occurred",
            errorSupport: {
                code: code,
                data: data,
                body: req.body,
                cookies: req.cookies,
            },
        }),
        false
    );
}

export default throwError;
