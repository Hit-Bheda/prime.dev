import express from "express";
import bodyParser from "body-parser";
import errorHandler from "./middlewares/errorHandler.utils.js";
import cors from "cors";
import userRouter from "./routers/users.router.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use("/api", userRouter);

app.use(errorHandler);

app.all("*", (req, res) => {
  res.status(404).json({ msg: "Page Not Found", status: "not ok" });
});

export default app;
