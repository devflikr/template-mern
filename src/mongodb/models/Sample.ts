import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const sampleModel = new mongoose.Schema({
    id: {
        type: ObjectId,
        unique: true,
        required: true,
    },
});

const SampleModel = mongoose.model("sample-model", sampleModel);

export default SampleModel;
