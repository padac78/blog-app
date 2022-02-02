const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
  post: String,
  text: String,
  authorId: String,
})

module.exports =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema, "comment")
