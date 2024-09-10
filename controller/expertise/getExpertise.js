const expertiseModel = require("../../models/expertise.model")

// for Dashboard
const getExpertiseController = async (req, res) => {
    try {
        const allExpertise = await expertiseModel.find().sort({ createdAt: -1 });

        res.json({
            message: "All Expertise",
            success: true,
            error: false,
            data: allExpertise
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// for website
const getWebsiteExpertiseController = async (req, res) => {
    try {
        const allExpertise = await expertiseModel.find({ status: 'active' }).sort({ createdAt: -1 });

        res.json({
            message: "All Expertise",
            success: true,
            error: false,
            data: allExpertise
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

const getSingleExpertiseController = async (req, res) => { 
    try {

        const { slug } = req.body;

        const expertise = await expertiseModel.findOne({ slug })

        if (!expertise) {
            return res.status(404).json({
                message: 'Expertise not found',
                success: false,
                error: true
            });
        }

        return res.status(200).json({
            data: expertise,
            message: "Ok",
            success: true,
            error: false,
        });


    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = {
    getExpertiseController,
    getWebsiteExpertiseController,
    getSingleExpertiseController
};