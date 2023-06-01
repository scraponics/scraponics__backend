// Organisation seller

import mongoose from "mongoose";

const OrganisationSellerSchema = mongoose.Schema({
    // organisation details
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
    address: {
        landmark: {
            type: String,
            required: true
        },
        city: {
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
        }
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
}, { timestamps: true })

const OrganisationModel = mongoose.model("Organisations", OrganisationSellerSchema);
export default OrganisationModel;