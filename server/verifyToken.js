import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("You're not authenticated");
  jwt.verify(token, process.env.jwtSec, (err, user) => {
    if (err) return res.status(401).json("Invalid token");
    user = req.user;
    next();
  });
};
