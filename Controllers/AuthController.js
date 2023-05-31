import UserModel from "../Models/userModel.js";

// Register a new User
export const registerUser = async (req, res) => {
    const { name, email, password, address, phoneNumber } = req.body;

    const newUser = new UserModel({ name, email, password, address, phoneNumber })

    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}