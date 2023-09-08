const express = require("express");

const app = express();
const PORT = 3000;
const SECRET_ENV = "secret";

app.get("/", (req, res) => {
  res.send("Hello from the the développeur star ⭐");
});

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.get("/secret", (req, res) => {
  console.log("SECRET_ENV", SECRET_ENV);
  res.sendStatus(200);
});

app.get("/bug", (req, res) => {
  console.log(a.b);
  res.sendStatus(200);
});

app.get("/double_res_send", (req, res) => {
  res.send("TEST ERROR");
  res.send("TEST ERROR 2");
});

app.get("/crash_app", (req, res) => {
  try {
    setTimeout(function () {
      throw new Error("CRASH APP");
    }, 10);
  } catch (e) {
    console.log("error", e);
  }
});

app.get("/error", (req, res) => {
  throw new Error("This is a deliberate error!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
