const dbConnection = require("../../../dbConnection.js")
const Post = require("../../../models/post.js")

dbConnection()

const getPosts = async (req, res) => {
  const { method } = req

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find()
        res.status(200).json({ data: posts })
        break
      } catch (error) {
        res.status(404).json({ message: error.message })
        break
      }
    case "POST":
      try {
        const post = await Post.create(req.body)
        res.status(201).json({ success: true, data: post })
        break
      } catch (error) {
        res.status(400).json({ success: false })
        break
      }
    default:
      res.status(404).json({ message: "error" })
      break
  }
}

module.exports = getPosts
