// middleware/auth.js
const jwt = require("jsonwebtoken");

const auth = (requiredRole) => (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    req.user = decoded;

    if (requiredRole && decoded.role !== requiredRole) {
      return res.status(403).json({ message: "Access Denied" });
    }
    next();
  });
};

module.exports = auth;
