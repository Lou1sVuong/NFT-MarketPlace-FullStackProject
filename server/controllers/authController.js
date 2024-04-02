const User = require("../models/User");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

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
        error: "Email or password is incorrect",
      });
    }

    // Check if password matches
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            console.log(err);
            return res.json({ error: "SignIn Failed" });
          }
          res.cookie("token", token).json(user);
        }
      );
    } else {
      return res.json({
        error: "Email or password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      error: "An error occurred while logging in",
    });
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  signInUser,
  getProfile,
};
