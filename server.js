const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from the the développeur star ⭐");
});

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.get("/error", (req, res) => {
  throw new Error("This is a deliberate error!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
