/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExpressRequest, ExpressResponse } from "../../types/Express";

function successResponse(
    req: ExpressRequest,
    res: ExpressResponse,
    message: string,
    data?: unknown
) {
    return res.json({
        success: true,
        status: "success",
        message: message,
        data: data,
    });
}

export default successResponse;
