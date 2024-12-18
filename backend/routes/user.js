const express = require("express");
const { getUserSavedPost, savePost } = require("../controllers/user.js");

const router = express.Router();

router.get("/saved", getUserSavedPost);

router.patch("/save", savePost);

module.exports = router;
