import mongoose from "mongoose";
import ENV from "../config";

mongoose
    .connect(ENV.mongo.uri)
    .then(() => console.log("⚔️  api @database mongodb connected successfully"))
    .catch((err) => console.error(err));
