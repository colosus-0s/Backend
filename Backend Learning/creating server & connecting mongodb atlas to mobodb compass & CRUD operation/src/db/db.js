const mongoose = require('mongoose')

async function connectDB() {
      await mongoose.connect("mongodb+srv://backend:BUDRbbqKKcPT52Jo@backend.f4akbgf.mongodb.net/halley")

      console.log("connected to DB")
      
}

module.exports = connectDB