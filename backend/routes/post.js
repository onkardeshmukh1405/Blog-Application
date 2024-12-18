const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  featurePost,
  uploadAuth,
} = require("../controllers/post.js");
const increaseVisit = require("../middlewares/increaseVisit.js");

const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getPosts);
router.get("/:slug", increaseVisit, getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/feature", featurePost);

module.exports = router;
