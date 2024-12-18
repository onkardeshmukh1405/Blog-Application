const express = require("express");
const {
  getPostComments,
  addComment,
  deleteComment,
} = require("../controllers/comment.js");

const router = express.Router();

router.get("/:postId", getPostComments);
router.post("/:postId", addComment);
router.delete("/:id", deleteComment);

module.exports = router;
