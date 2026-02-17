const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const isAdmin = require("../middleware/isAdmin");

const {
  test,
  makeAdmin,
} = require("../controllers/admin/index");


// CREATE user

router.get('/test', isLoggedIn, isAdmin, test);

router.post('/:id/makeAdmin', isLoggedIn, isAdmin, makeAdmin);

module.exports = router;
