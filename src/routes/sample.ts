import express from "express";

const sampleRouter = express.Router();

sampleRouter.post("/sample", (req, res) => {
    res.status(200).send("Sample output");
});

export default sampleRouter;
