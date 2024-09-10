const jwt = require('jsonwebtoken')

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token
        if (!token) {
            return res.status(200).json({
                message:"Please login...",
                error:true,
                success:false
            })
        }

        jwt.verify(token,process.env.TOKEN_SECRET_KEY, function(err, decode){
            if(err){
                console.log("Error auth",err);
            }
            req.userId = decode?._id
            next()
        });

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            data: [],
            error: true,
            success: false
        })
    }
}

module.exports = authToken