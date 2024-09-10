const projectModel = require("../../models/project.model")

const updateProjectStatusController = async (req, res) => {
    const { project_id } = req.params
    const { status } = req.body

    const updatedStatus = await projectModel.findByIdAndUpdate(project_id, { status }, { new: true })
    return res.status(200).json({ message: 'Product status update success', updatedStatus })

}

module.exports = updateProjectStatusController