import mongoose from "mongoose";

const rateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true })

const RateModel = mongoose.model("Rate", rateSchema);
export default RateModel;