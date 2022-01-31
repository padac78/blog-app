const dbConnection = require("../../../dbConnection.js")
const User = require("../../../models/user.js")

dbConnection()

const getUser = async (req, res) => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id)
        res.status(200).json({ data: user })
      } catch (error) {
        res.status(400).json({ message: "error" })
      }
      break

    default:
      res.status(400).json({ message: "error" })
  }
}
module.exports = getUser
