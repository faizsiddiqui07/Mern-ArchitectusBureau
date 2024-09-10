const expertiseModel = require("../../models/expertise.model");

const deleteExpertiseController = async (req, res) => {
    const { expertise_id } = req.params;

    try {
        const project = await expertiseModel.findById(expertise_id);

        if (!project) {
            return res.status(404).json({ message: 'Expertise not found' });
        }

        await expertiseModel.findByIdAndDelete(expertise_id);

        return res.status(200).json({ message: 'Expertise deleted successfully' });
    } catch (error) {
        console.error("Error deleting Expertise:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

 module.exports = deleteExpertiseController;