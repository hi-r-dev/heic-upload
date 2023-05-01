const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer();

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded");
  }

  // Save the file to disk or database
  console.log(`Received file: ${file.originalname}`);
  res.set({ "Access-Control-Allow-Origin": "*" });
  res.send("File uploaded successfully");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
