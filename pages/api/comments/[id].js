const dbConnection = require("../../../dbConnection.js")
const Comment = require("../../../models/comment.js")

dbConnection()

const getComment = async (req, res) => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case "GET":
      try {
        const comment = await Comment.findOne({ post: id })
        res.status(200).json({ data: comment })
      } catch (error) {
        res.status(400).json({ message: "error" })
      }
      break

    default:
      res.status(400).json({ message: "error" })
  }
}
module.exports = getComment
