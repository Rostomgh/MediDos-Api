const jwt = require("jsonwebtoken");
const User = require("../Model/User.js");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json({ error: "You must be authorized" });
    }
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };
    res.json(welcome);
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = authMiddleware;
