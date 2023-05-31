import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
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
    // products that are open for bidding
    cart: [],
    // previous selled products
    history: []

}, { timestamps: true })

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;