const mongoose = require("mongoose")

async function dbConnection() {
  try {
    mongoose.connect(
      process.env.URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("connected")
    )
  } catch (error) {
    console.log("could not connect")
  }
}

module.exports = dbConnection
