// Requirements
const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const isAdmin = require("../middleware/isAdmin");


// Reference to Controllers
const {
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/public/index");

// CREATE user
router.post("/register", createUser);

app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

// LOGIN user
router.post("/login", loginUser);

// LOGOUT user
router.post("/logout", logoutUser);

router.get('/test', (req, res) => {
  res.send('hi')
})

module.exports = router;
