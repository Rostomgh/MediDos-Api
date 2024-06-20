const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')



const authMiddleware = async (req , res , next)=>{
    const {authorization} = req.headers

    try {


        if(!authorization){
            throw Error('You are not authorized')
        }

        const token = authorization.split(' ')[1]



        const decoded = jwt.verify(token , process.env.JWT_SECRET)

        req.user = await User.findOne({_id : decoded._id}).select('-password')

        next()

    } catch (error) {
        res.status(401).json({error : error.message})
    }
}

module.exports = authMiddleware