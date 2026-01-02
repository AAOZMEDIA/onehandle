const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OneHandle backend running");
});

app.post("/posts", (req, res) => {
  res.json({ success: true, content: req.body.content });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Backend running"));