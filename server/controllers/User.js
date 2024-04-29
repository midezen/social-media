import Post from "../models/Post.js";
import User from "../models/User.js";

export const updateUser = async (req, res) => {
  if (req.user.id === req.params.id) {
    try {
      if (req.body.password) {
        const ciphertext = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.encKey
        ).toString();
        req.body.password === ciphertext;
      }

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { password, ...others } = updatedUser;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Permission denied");
  }
};

export const deleteUser = async (req, res) => {
  if (req.user.id === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Permission denied");
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const likePost = async (req, res) => {
  try {
    await Post.findById(req.params.id, { $push: { likes: req.user.id } });
    res.status(200).json("successfully liked post");
  } catch (err) {
    res.status(200).json(err);
  }
};

export const unlikePost = async (req, res) => {
  try {
    await Post.findById(req.params.id, { $pull: { likes: req.user.id } });
    res.status(200).json("successfully unliked post");
  } catch (err) {
    res.status(200).json(err);
  }
};

export const savePost = async (req, res) => {
  try {
    await User.findById(req.user.id, {
      $push: { savedPosts: req.params.id },
    });
    res.status(200).json("Post saved successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const unsavePost = async (req, res) => {
  try {
    await User.findById(req.user.id, {
      $pull: { savedPosts: req.params.id },
    });
    res.status(200).json("successfully unsaved post");
  } catch (err) {
    res.status(500).json(err);
  }
};
