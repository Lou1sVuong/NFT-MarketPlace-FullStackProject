const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  signInUser,
} = require("../controllers/authController");
// middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.post("/Register", registerUser);
router.post("/SignIn", signInUser);

module.exports = router;