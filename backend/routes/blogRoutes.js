const express = require("express");
const Blog = require("./models/Blog");
const upload = require("../middleware/upload");

const router = express.Router();

// Get all blogs
router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

// Create new blog with image
router.post("/", upload.single("image"), async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    image: req.file ? req.file.path : null,
  });
  await blog.save();
  res.json(blog);
});

// Get single blog
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

module.exports = router;
