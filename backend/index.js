const express = require("express");
const connectDB = require("./lib/DB.js");
const UserRoute = require("./routes/user.js");
const PostRoute = require("./routes/post.js");
const CommentRoute = require("./routes/comment.js");
const WebhookRoute = require("./routes/webhook.js");
const { clerkMiddleware } = require("@clerk/express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

dotenv.config();

app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());
app.use("/webhooks", WebhookRoute);
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("hello");
});

// app.get("/auth-state", (req, res) => {
//   const authState = req.auth;
//   res.json(authState);
// });

app.use("/users", UserRoute);
app.use("/posts", PostRoute);
app.use("/comments", CommentRoute);

//global catches
app.use((error, req, res, next) => {
  // console.log("error", error);
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running!");
});
