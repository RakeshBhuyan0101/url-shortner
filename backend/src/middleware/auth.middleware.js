import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) return  res.status(401).json({ message: "Unauthorized" });

  try {
    const decooded =  verifyToken(token);
    const user = await findUserById(decooded.id);
    if (!user) res.status(401).json({ message: "Unauthorized" });
    req.user = user;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: "Unauthorized" });
  }
};
