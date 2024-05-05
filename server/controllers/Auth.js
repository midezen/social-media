import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

export const register = async (req, res) => {
  try {
    const findUsername = await User.findOne({ userName: req.body.userName });
    findUsername && res.status(403).json("username has been taken");

    const findEmail = await User.findOne({ email: req.body.email });
    findEmail && res.status(403).json("This Email has already been registered");

    const ciphertext = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.encKey
    ).toString();
    const newUser = new User({ ...req.body, password: ciphertext });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).json("User does not exist");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.encKey);
    const unhashedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (req.body.password !== unhashedPassword)
      return res.status(401).json("Wrong Password");

    const token = jwt.sign({ id: user._id }, process.env.jwtSec, {
      expiresIn: "2d",
    });

    const { password, ...others } = user_doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const logout = async (req, res) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("user logged out successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};
