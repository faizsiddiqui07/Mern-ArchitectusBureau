const projectModel = require("../../models/project.model");

const updateProjectController = async (req, res) => {
    try {

        const { _id, projectType, projectImage } = req.body;

        const updateProject = await projectModel.findByIdAndUpdate(_id, {
            projectType,
            projectImage,
        })

        res.json({
            message: "Project update successfully",
            data: updateProject,
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

module.exports = updateProjectController