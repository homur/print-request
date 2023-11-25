const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use("/uploads", express.static("uploads"));

const port = 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post("/sendPrint", upload.single("image"), (req, res) => {
  console.log(req);
  res.send("File uploaded successfully!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
