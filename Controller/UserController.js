import User  from  '../Model/User.js';
import createToken  from  '../util/tokenCreate.js';
import bcrypt  from  'bcrypt';
import validator  from  'validator';

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
      
    });
    const token = createToken(newUser._id);
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
      return res.status(233).json({ error: 'Please fill all required fields' });  
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      // we use 401 for unauthorized for both email and password for security reason , but we can use 404 for not found
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Validate password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }  
    const token = createToken(user._id);
    delete user.password;
    res.status(200).json({
      message: 'Login successful',
      ...user,
      token,
    });
  } catch (error) {
    // 500 for internal server error
      return  res.status(500).json({ error: error.message });
  }
};

export {
  signup,
  login,
};
