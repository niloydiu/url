import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./configs/connectDB.config.js";
import { url } from "./routes/url.route.js";

await connectDB();

const app = express();
const port = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hey buddy!");
});

app.use("/api/url", url);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
