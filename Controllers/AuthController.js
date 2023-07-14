import IndividualModel from "../Models/indSellerModel.js";
import OrganisationModel from "../Models/orgSellerModel.js";
import VendorModel from "../Models/vendorModel.js";

// Register as an Individual User
export const registerinduser = async (req, res) => {
    const { name, email, password, landmark, district, state, postalCode, profilePicture, phoneNumber } = req.body;

    const newinduser = new IndividualModel({ name, email, password, landmark, district, state, postalCode, profilePicture, phoneNumber });

    try {
        const oldUser = await IndividualModel.findOne({ email: email });
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

// signup as an organisation
export const registerorg = async (req, res) => {
    const { name, email, password, landmark, district, state, postalCode, profilePicture, phoneNumber, gstNumber } = req.body;

    const neworg = new OrganisationModel({ name, email, password, landmark, district, state, postalCode, profilePicture, phoneNumber, gstNumber });

    try {
        const oldOrg = await OrganisationModel.findOne({ email: email });
        if (oldOrg) {
            res.status(400).json({ message: "organisation is already registered "});
        } 
        await neworg.save();
        res.status(200).json(neworg);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// login as an organisation
export const loginorg = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await OrganisationModel.find({ email: email });

        if (password == user[0].password) {
            res.status(200).json(user);
        } else {
            res.status(400).json("Wrong password");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// signup as a Vendor
export const registervendor = async (req, res) => {
    const { name, email, password, landmark, district, state, postalCode, profilePicture, phoneNumber, gstNumber } = req.body;

    const newvendor = new VendorModel({ name, email, password, landmark, district, state, postalCode, profilePicture, phoneNumber, gstNumber });

    try {
        const oldVendor = await VendorModel.findOne({ email: email });
        if (oldVendor) {
            res.status(400).json({ message: "organisation is already registered "});
        } 
        await newvendor.save();
        res.status(200).json(newvendor);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// login as a Vendor
export const loginvendor = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await VendorModel.find({ email: email });

        if (password == user[0].password) {
            res.status(200).json(user);
        } else {
            res.status(400).json("Wrong password");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}