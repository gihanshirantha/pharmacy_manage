import User from "../models/User.js";
import jwt from "jsonwebtoken";

//user Register
export const register = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      userName: req.body.userName,
      password: req.body.password,
      role: req.body.role,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully Created",
    });
  } catch (error) {
    res.status(500).json({
      success: fales,
      message: "Not created",
    });
  }
};

//user Login
export const login = async (req, res) => {
  try {
    const userName = req.body.userName;
    const password = req.body.password;

    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).json({
        success: fales,
        message: "User not found",
      });
    }

    if (!password) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Email or password",
      });
    }

    const { Password, role, ...rest } = user._doc;

    //create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    //set token in the brouser cookie
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "successfully login",
        data: { ...rest },
      });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: "Faild to login",
      });
  }
};
