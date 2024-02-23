import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import userAgent from "express-useragent";
import express, { Express } from "express";

import { resolve } from "path";
import ENV from "../config";

const expressApp: Express = express();

expressApp.use(cookieParser());
expressApp.use(express.json());
expressApp.use(userAgent.express());
expressApp.use(morgan("dev"));
expressApp.use(
    cors({
        origin: [
            /^https:\/\/(?:[a-zA-Z0-9-]+\.)?devflikr\.com$/,
            /^https:\/\/(?:[a-zA-Z0-9-]+\.)?flikr\.tech$/,
            /^http:\/\/localhost:(7\d{3}|7999)$/,
        ],
        credentials: true,
    })
);

expressApp.use(express.static(resolve("public")));

expressApp.listen(ENV.port, () => {
    console.log(`⚔️  api @port ${ENV.port}`);
});

expressApp.get("/health", (req, res) => {
    res.sendStatus(200);
});

export default expressApp;
