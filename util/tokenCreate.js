const jwt = require('jsonwebtoken')
require('dotenv').config()


const createToken = (id)=>{
    return jwt.sign({ id }, process.env.SECRET_TOKEN, { expiresIn: '30d' })
}


module.exports = createToken