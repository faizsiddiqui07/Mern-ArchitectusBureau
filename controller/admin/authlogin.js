const adminModel = require('../../models/adminModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {

    const { email, password } = req.body

    if (!email) {
        return res.status(404).json({ message: 'Please provide your email' })
    }
    if (!password) {
        return res.status(404).json({ message: 'Please provide your password' })
    }

    try {
        const user = await adminModel.findOne({ email })

        if (user) {
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                const obj = {
                    id: user.id,
                    name: user.name,
                }
                const token = await jwt.sign(obj, process.env.TOKEN_SECRET_KEY, {
                    expiresIn: process.env.exp_time
                })
                return res.status(200).json({ message: 'login Success', token, error: false, success: true })
            } else {
                return res.status(404).json({ message: "Invalid Password" })
            }
        } else {
            return res.status(404).json({ message: "User not found" })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: true,
            success: false
        })
    }
}

module.exports = {
    login
}