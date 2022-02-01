const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  title: String,
  text: String,
  authorId: String,
  comments: Array,
})

module.exports =
  mongoose.models.Post || mongoose.model("Post", postSchema, "post")
