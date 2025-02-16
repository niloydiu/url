import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./configs/connectDB.config.js";
import { redirecto } from "./routes/redirect.route.js";

await connectDB();

const app = express();
const port = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Base route is working fine!");
});

app.use("/", redirecto);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
