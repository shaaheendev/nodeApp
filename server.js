const express = require("express");
const app = express();

const port = 5000;

app.use(express.static("./public"));

app.get("/", (req, res) => {
  // res.sendFile("./public/index.html");
  return;
});

app.listen(5000, console.log(`listenning on port ${port}`));
