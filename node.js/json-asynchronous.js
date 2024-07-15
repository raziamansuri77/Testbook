const express = require("express");
const app = express();
const port = 8080;
const userRouter = express.Router();
userRouter.get("/", (req, res) => {
  res.status(200).json({
    data: "You have hit user get router",
  });
});
userRouter.post("/", (req, res) => {
  res.status(200).json({
    data: "You have hit user post router",
  });
});
app.use("/user", userRouter);
const server = app.listen(port, () => {
  console.log(`App  listening on port ${port}`);
});
