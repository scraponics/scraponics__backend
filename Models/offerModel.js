// bidding offers

import mongoose from "mongoose";

const BiddingSchema = mongoose.Schema({
    // product
    productId: {
        type: String,
        required: true
    },
    // owner of the product
    ownerId: {
        type: String,
        required: true
    },
    // vendor, who is making the offer
    vendorId: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    // if bidding offer is accepted or rejected
    status: {
        type: String,
        required: true
    }
})

const BiddingModel = mongoose.model("Biddings", BiddingSchema);
export default BiddingModel;