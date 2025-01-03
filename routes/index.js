const express = require("express")
const authlogin = require('../controller/admin/authlogin')
const uploadProjectController = require("../controller/projects/uploadProjects")
const { getProjectController, getWebsiteProjectController, getSingleProjectController, getRelatedProjectController } = require("../controller/projects/getProject")
const deleteProjectController = require("../controller/projects/deleteProject")
const updateProjectStatusController = require("../controller/projects/updateProjectStatus")
const updateProjectController = require("../controller/projects/updateProject")
const getCategoryWiseProjectController = require("../controller/projects/getCategoryWiseProject")
const {subscriberController, getAllSubscribers} = require("../controller/subscribers/subscriber")
const { saveCarrerController, getCarrerController, deleteCarrerController } = require("../controller/carrer/carrer")
const searchProject = require('../controller/projects/searchProject')

const router = express.Router()
const multer = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/api/adminLogin', authlogin.login)

//Project Dashboard
router.post('/api/add-project', uploadProjectController)
router.get('/api/get-project', getProjectController)
router.delete('/api/delete-project/:project_id', deleteProjectController)
router.put('/api/updateProjectStatus/:project_id', updateProjectStatusController)
router.get('/api/getCategoryWiseProject/:project_id', getCategoryWiseProjectController)
router.put('/api/updateProject/:project_id', updateProjectController)

// Subscribed
router.post('/api/subscribe', subscriberController)
router.get('/api/getSubscribers',getAllSubscribers)

// for website project
router.get('/api/getProject', getWebsiteProjectController)
router.post('/api/projectDetails', getSingleProjectController)
router.post('/api/getRelatedProject', getRelatedProjectController)
router.get('/api/search', searchProject)


// for website carrer
router.post('/api/uploadCarrers', upload.single("resume"), saveCarrerController)
router.get('/api/getCarrer', getCarrerController)
router.delete('/api/delete-carrer/:id', deleteCarrerController)



module.exports = router