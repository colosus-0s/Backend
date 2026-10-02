const express = require("express");
const postModel = require("./models/post.model");
const multer = require("multer");
const uploadFile = require("./services/storage.service");

const app = express();
app.get(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body, req.file);

  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "Post Created successfully",
    post,
  });
});

app.get("/post",async(req,res)=>{
      const posts = await postModel.find()

      return res.status(200).json({
            message:"Post has been fetchecd successfully",
            posts
      })
})

module.exports = app;
