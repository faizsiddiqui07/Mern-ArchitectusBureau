const expertiseModel = require("../../models/expertise.model")

const updateExpertiseStatusController = async (req, res) => {
    const { expertise_id } = req.params
    const { status } = req.body

    const updatedStatus = await expertiseModel.findByIdAndUpdate(expertise_id, { status }, { new: true })
    return res.status(200).json({ message: 'Expertise status update success', updatedStatus })

}

module.exports = updateExpertiseStatusController