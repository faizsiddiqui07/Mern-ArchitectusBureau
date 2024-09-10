const expertiseModel = require("../../models/expertise.model")

const getCategoryWiseExpertiseController = async (req, res) => {
    try {

        const {expertise_id} = req.params;

        const singleExpertise = await expertiseModel.findById(expertise_id)
        if (!singleExpertise) {
            return res.status(404).json({
                message:"Expertise not found",
                success:false,
                error:true
            })
        }

        res.status(200).json({
            data:singleExpertise,
            message:"Single expertise",
            success:true,
            error:false
        }
        )

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = getCategoryWiseExpertiseController;