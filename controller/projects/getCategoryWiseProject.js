const projectModel = require("../../models/project.model")

const getCategoryWiseProjectController = async (req, res) => {
    try {

        const {project_id} = req.params;

        const singleProject = await projectModel.findById(project_id)
        if (!singleProject) {
            return res.status(404).json({
                message:"Project not found",
                success:false,
                error:true
            })
        }

        res.status(200).json({
            data:singleProject,
            message:"Single Project",
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

module.exports = getCategoryWiseProjectController;