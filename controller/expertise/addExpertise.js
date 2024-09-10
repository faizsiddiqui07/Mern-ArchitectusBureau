const expertiseModel = require('../../models/expertise.model')

const addExpertiseController = async (req, res) => {
    try {

        const { expertiseName } = req.body;

        if (!req.body) {
            return res.json({
                message: 'All fields are required',
                error: true,
                success: false
            });
        }

        const uploadExpertise = new expertiseModel({
            expertiseName: expertiseName.trim(),
            slug: expertiseName.trim().split(' ').join('-'),
            ...req.body,
        }
    )
        const saveExpertise = await uploadExpertise.save();

        res.status(201).json({
            message: "Expertise upload successfull",
            error: false,
            success: true,
            data: saveExpertise
        });
    } catch (error) {
        console.error('Error parsing form:', error);
        res.status(400).json({
            message: 'Error parsing form',
            error: true,
            success: false
        });
    }
};

module.exports = addExpertiseController