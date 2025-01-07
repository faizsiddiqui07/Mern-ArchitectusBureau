const projectModel = require("../../models/project.model")


// for dashboard
const getProjectController = async (req, res) => {
    try {
        const allProject = await projectModel.find().sort({ createdAt: -1 });

        res.json({
            message: "All Project",
            success: true,
            error: false,
            data: allProject
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// for website
const getWebsiteProjectController = async (req, res) => {
    try {
        const allProject = await projectModel.find({ status: 'active' });


        res.json({
            message: "All Project",
            success: true,
            error: false,
            data: allProject
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

const getSingleProjectController = async (req, res) => { 
    try {

        const { slug } = req.params;

        const project = await projectModel.find({ slug })

        if (!project) {
            return res.status(404).json({
                message: 'Project not found',
                success: false,
                error: true
            });
        }

        return res.status(200).json({
            data: project,
            message: "Ok",
            success: true,
            error: false,
        });


    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// const getRelatedProjectController = async (req, res) => {
//     try {
        
//         const { projectType } = req.body;

//         const projects = await projectModel.find({ projectType }).sort({createdAt:-1})

//         if (!projects) {
//             return res.status(404).json({
//                 message: 'Projects not found',
//                 success: false,
//                 error: true
//             });
//         }

//         return res.status(200).json({
//             data: projects,
//             message: "Ok",
//             success: true,
//             error: false,
//         });
        

//     } catch (error) {
//         res.status(400).json({
//             message: error.message || error,
//             error: true,
//             success: false
//         })
//     }
// }


module.exports = {
    getProjectController,
    getWebsiteProjectController,
    getSingleProjectController,
    // getRelatedProjectController
};