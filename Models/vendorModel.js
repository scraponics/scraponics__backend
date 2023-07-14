import mongoose from "mongoose";

const VendorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    gstNumber: {
        type: String,
        required: true
    },
    // products that are open for bidding
    cart: [],
    // previous selled products
    history: []
})

const VendorModel = mongoose.model("Vendors", VendorSchema);
export default VendorModel;