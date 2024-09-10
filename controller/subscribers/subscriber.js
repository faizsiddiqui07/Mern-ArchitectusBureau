const subscriberModel = require('../../models/subscriberModel')

const subscriberController = async (req, res) => {
    try {
        const { email, phone } = req.body;

        if (!email) {
            throw new Error("Please provide email")
        }
        if (!phone) {
            throw new Error("Please provide phone")
        }

        const existEmail = await subscriberModel.findOne({ email })
        const existPhone = await subscriberModel.findOne({ phone })


        if (existEmail) {
            throw new Error("Email already exists")
        }
        if (existPhone) {
            throw new Error("Phone already exists")
        }


        const subscriberData = new subscriberModel({
            email,
            phone
        });

        const saveSubscriber = await subscriberData.save();

        res.status(201).json({
            data: saveSubscriber,
            success: true,
            error: false,
            message: "Subscribed Successfully"
        })
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

const getAllSubscribers = async (req, res) => {
    try {
        const allSubscribers = await subscriberModel.find().sort({ createdAt: -1 })

        res.json({
            data: allSubscribers,
            message: "All Subscribers",
            error: false,
            success: true
        })
    } catch (error) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }


}

module.exports = {
    subscriberController,
    getAllSubscribers
}