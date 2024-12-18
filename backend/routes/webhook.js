const clerkWebHook = require("../controllers/webhook.js");
const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.post(
  "/clerk",
  bodyParser.raw({ type: "application/json" }),
  clerkWebHook
);

module.exports = router;
