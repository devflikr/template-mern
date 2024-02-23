import "dotenv/config";
import https from "https";

import "./mongodb/config";
import expressApp from "./express";

import ENV from "./config";

expressApp.get("*", (req, res) =>
    res.status(404).send("This path doesn't exist")
);

if (ENV.is.healthCheckEnabled) {
    setInterval(() => {
        console.log("⚔️ api @health", new Date().toLocaleString());
        ENV.domain && https.get(ENV.domain);
    }, 540000);
}
