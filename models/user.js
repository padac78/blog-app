const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  type: String,
  name: String,
  password: String,
  email: String,
})

module.exports =
  mongoose.models.Post || mongoose.model("User", postSchema, "user")
