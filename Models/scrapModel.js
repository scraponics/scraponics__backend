import mongoose from "mongoose";

const ScrapSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qunatity: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    // current owner of the scrap
    owner: {
        type: String,
        required: true
    },
    // Previous owners of the scrap
    history: []
}, { timestamps: true })

const ScrapModel = mongoose.model("Scrap", ScrapSchema);
export default ScrapModel;