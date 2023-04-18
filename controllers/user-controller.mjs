import { User } from "../models/user-model.mjs";
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message:
          "This email address already exists,try with a different email address",
      });
    }

    const user = await new User({
      email,
      password,
    }).save();

    console.log(email);

    res.send({
      id: user._id,
      email: user.email,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message:
          "the email address you entered is not connected to an account.",
      });
    }
    const check = password === user.password;
    if (!check) {
      return res.status(400).json({
        message: "Invalid credentials.Please try again.",
      });
    }
    res.send({
      id: user._id,
      email: user.email,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

export { register, login };
