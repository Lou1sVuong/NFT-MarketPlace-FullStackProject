const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  signInUser,
  getProfile,
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
router.get("/infoUser", getProfile);

module.exports = router;
