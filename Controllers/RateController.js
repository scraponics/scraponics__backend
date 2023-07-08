import RateModel from "../Models/rateModel.js";


// posting the data into the mongodb server
export const postScrapData = async (req, res) => {
    const { name, rate, category, description, imageUrl } = req.body;

    const newRateData = new RateModel({ name, rate, category, description, imageUrl }); 

    try {
        await newRateData.save();
        res.status(200).json(newRateData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getScrapData = async (req, res) => {
    const { category } = req.body;;

    try {
        const rateData = await RateModel.find({ category: category });

        res.status(200).json(rateData);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}