const projectModel = require("../../models/project.model");

const updateProjectController = async (req, res) => {
    try {

        const { _id, projectName, projectType,projectImage,completionDate,projectAddress,description } = req.body;

        const updateProject = await projectModel.findByIdAndUpdate(_id, {
            projectName: projectName.trim(),
            slug: projectName.trim().split(' ').join('-'),
            projectType,
            projectImage,
            completionDate,
            projectAddress,
            description
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