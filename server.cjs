const jsonServer = require("json-server");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const imagesDir = path.join(__dirname, "public/images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

server.use(middlewares);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const imageFilename = date.getTime() + "_" + file.originalname;
    req.body.imageFilename = imageFilename;
    cb(null, imageFilename);
  },
});

const upload = multer({ storage: storage });

server.use("/images", express.static(path.join(__dirname, "public/images")));

server.post("/recipes", upload.single("image"), (req, res, next) => {
  if (req.file) {
    req.body.image = `/images/${req.body.imageFilename}`;
  }
  
  if (!req.body.name || !req.body.category || !req.body.instructions || !req.body.preparationTime || !req.body.cookingTime) {
    return res.status(400).json({ error: "All fields are required" });
  }

  next();
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
