const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const upload = multer();

app.use(cors());

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded");
  }

  // Save the file to disk or database
  console.log(`Received file: ${file.originalname}`);
  res.send("File uploaded successfully");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
