const expertiseModel = require("../../models/expertise.model");

const updateExpertiseController = async (req, res) => {
    try {

        const { _id,expertiseName,expertiseImage,description  } = req.body;

        const updateExpertise = await expertiseModel.findByIdAndUpdate(_id, {
            expertiseName:expertiseName.trim(), 
            slug: expertiseName.trim().split(' ').join('-'),
            expertiseImage,
            description,
            })

        res.json({
            message: "Expertise update successfully",
            data: updateExpertise,
            success: true,
            error: false,
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = updateExpertiseController