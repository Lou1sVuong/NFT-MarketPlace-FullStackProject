const User = require("../models/User");
const { hashPassword, comparePassword } = require("../helpers/auth");
const test = (req, res) => {
  res.json("test is working");
};

// Register user Endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if name was entered
    if (!name) {
      return res.json({ error: "Name is required" });
    }
    // Check is password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters",
      });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email already exists" });
    }

    const hashedPassword = await hashPassword(password);

    // create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//  SignIn user Endpoint
const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "Incorrect Email or Password",
      });
    }

    // Check if password matches
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Incorrect Email or Password",
      });
    }

    // If password is correct, return user login information
    res.status(200).json({
      user: {
        _id: user._id,
        email: user.email,
        // Other user information
      },
      message: "Login successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "An error occurred while logging in",
    });
  }
};

module.exports = {
  test,
  registerUser,
  signInUser,
};
