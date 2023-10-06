import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({
      success: false,
      message: "You are not authorize",
    });
  }

  //if token is exist then verify the token
  jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "User") {
      next();
    } else {
      return res.status(401).jason({
        success: false,
        message: "You are not authenticated",
      });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === "Admin") {
      next();
    } else {
      return res.status(401).jason({
        success: false,
        message: "You are not authorize",
      });
    }
  });
};