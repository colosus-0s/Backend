const mongoose = require("mongoose")
const chalk = require('chalk')
const connectedDb = async ()=>{
      try{
            await mongoose.connect(process.env.MONGO_URI)
            console.log(chalk.yellow.underline("Database connected successfully"))
      }catch(error){
            console.error('Database connection error', error)
      }
}

module.exports = connectedDb