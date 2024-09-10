const projectModel = require("../../models/project.model");

const deleteProjectController = async (req, res) => {
    const { project_id } = req.params; 

    try {
        const project = await projectModel.findById(project_id);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        await projectModel.findByIdAndDelete(project_id);

        return res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error("Error deleting Project:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

 module.exports = deleteProjectController;