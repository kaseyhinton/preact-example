const path = require("path");
const express = require("express");
const app = express(); // create express app

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// start express server on port 5000
var port = process.env["PORT"] || 8000;
app.listen(port, () => {
  console.log("server started on port", port);
});
