import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    req.id = decode.user || decode.id; // ✅ Handles either structure

    if (!req.id) {
      return res.status(401).json({
        message: "Invalid token payload",
        success: false,
      });
    }

    next();
  } catch (error) {
    console.log("JWT error:", error);
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};

export default isAuthenticated;
