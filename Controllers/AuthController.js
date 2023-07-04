import IndividualModel from "../Models/indSellerModel.js";

// Register as an Individual User
export const registerinduser = async (req, res) => {
    const { name, email, password, landmark, district, state, postalCode, profilePicture, phoneNumber } = req.body;

    const newinduser = new IndividualModel({ name, email, password, landmark, district, state, postalCode, profilePicture, phoneNumber });

    try {
        const oldUser = await IndividualModel.findOne({ email });
        if (oldUser) {
            res.status(400).json({ message: "user is already registered" });
        }
        await newinduser.save();
        res.status(200).json(newinduser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Login as an Individual User
export const loginindUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await IndividualModel.find({ email: email });

        if (password == user[0].password) {
            res.status(200).json(user);
        } else {
            res.status(400).json("Wrong password");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}