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
    default:
      res.status(404).json({ message: "error" })
      break
  }
}

module.exports = getPosts
