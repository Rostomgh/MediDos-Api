const jwt = require('jsonwebtoken');

// Function to create a JWT token
const createToken = (userId) => {
    return jwt.sign({ _id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};


module.exports = createToken