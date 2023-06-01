import mongoose from "mongoose";

const ScrapSchema = mongoose.Schema({
    // current owner of the scrap
    ownerId: {
        type: String,
        required: true
    },

    // scrap details
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
    status: {
        type: String,
        required: true
    },

    // Previous owners of the scrap (for tracking purpose)
    history: []
}, { timestamps: true })

const ScrapModel = mongoose.model("Scrap", ScrapSchema);
export default ScrapModel;