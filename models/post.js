const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  title: String,
  text: String,
  authorId: String,
})

module.exports =
  mongoose.models.Post || mongoose.model("Post", postSchema, "post")
