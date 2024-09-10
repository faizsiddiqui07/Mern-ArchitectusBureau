const carrerModel = require('../../models/carrerModel');

const saveCarrerController = async (req, res) => {
    try {

        const formData = req.body;
        const resumePath = req.file ? req.file.path : null;


        // // Check if the resume was uploaded
        if (!resumePath) {
            return res.status(400).json({
                message: 'Resume upload failed',
                error: true,
                success: false
            });
        }

        // Save the data into the database
        const carrerData = new carrerModel({
            ...formData,
            resume: resumePath
        });

        await carrerData.save();

        res.status(200).json({
            message: 'Data saved successfully',
            success: true
        });

    } catch (error) {
        console.error('Error saving carrer data:', error);
        res.status(500).json({
            message: 'Error saving carrer data',
            error: true,
            success: false
        });
    }
};

const getCarrerController = async (req, res) => {
    try {
        const data = await carrerModel.find({});
        res.status(200).json({ status: "ok", data: data });
    } catch (error) {
        console.error("Error fetching carrer data:", error);
        res.status(500).json({ status: "error", message: "Failed to fetch carrer data" });
    }
}

const deleteCarrerController = async (req, res) => {
    try {
        const { id } = req.params
        
        const carrer = await carrerModel.findById(id)
        if (!carrer) {
            return res.status(404).json({ message: 'Carrer not found' });
        }
        await carrerModel.findByIdAndDelete(id)
        return res.status(200).json({ message: 'Career record deleted successfully' });
    } catch (error) {
        console.error('Error deleting carrer data:', error);
        res.status(500).json({
            message: 'Error deleting carrer data',
            error: true,
            success: false
        });
    }
}

module.exports = {
    saveCarrerController,
    getCarrerController,
    deleteCarrerController
};
