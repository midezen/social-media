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
