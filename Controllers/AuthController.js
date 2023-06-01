import OrganisationModel from "../Models/orgSellerModel.js";

// Register an organisation
export const registerOrg = async (req, res) => {
    const { name, email, password, address, phoneNumber, gstNumber } = req.body;

    const newOrg = new OrganisationModel({ name, email, password, address, phoneNumber, gstNumber });

    try {
        await newOrg.save()
        res.status(200).json(newOrg)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}