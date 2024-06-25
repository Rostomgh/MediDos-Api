const User = require('../Model/User');
const createToken = require('../util/tokenCreate');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Signup function
const signup = async (req, res) => {
  const { username, email, password, } = req.body;

  try {
    // Validate input fields
    if (!username || !email || !password) {
      throw new Error('Please fill all required fields');
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      throw new Error('Invalid email format');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      status: 'User', // Example status, adjust as needed
    });

    // Generate JWT token
    const token = createToken(newUser._id);

    // Respond with success message and token
    res.status(201).json({
      message: 'User created successfully',
      username: newUser.username,
      email: newUser.email,
      status: newUser.status,
      token,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
};

// Login function
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input fields
    if (!email || !password) {
      throw new Error('Please provide email and password');
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Validate password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = createToken(user._id);

    // Respond with user details and token
    res.status(200).json({
      message: 'Login successful',
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signup,
  login,
};
