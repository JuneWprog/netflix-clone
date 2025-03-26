import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());    
app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

