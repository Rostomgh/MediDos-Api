const jwt = require("jsonwebtoken");
const User = require("../Model/User");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      throw Error("You must be authorized");
    }
    const token = authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ _id: decoded._id });

    if (!user) {
      throw Error("User not found");
    }

    req.user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      status: user.status,
    };

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = authMiddleware;
