const projectModel = require("../../models/project.model");


const searchProject = async (req, res) => {
  try {

    const query = req.query.q;

    if (!query) {
      return res.status(400).json({
        message: "Query parameter 'q' is required",
        error: true,
        success: false
      });
    }

    const regex = new RegExp(query, 'i');  // 'i' makes it case-insensitive

    const product = await projectModel.find({
      projectName: { $regex: regex }  // Match product name against the regex
    });
    console.log(product);
    

    res.json({
      data: product,
      message: "Search Product list",
      error: false,
      success: true
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false
    });
  }
};

module.exports = searchProject;
