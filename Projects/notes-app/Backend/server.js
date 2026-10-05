const app = require("./src/app")
const connectDB = require('./src/db/db')
const chalk = require('chalk')
require("dotenv").config()

connectDB()


app.listen(3000,()=>{
      console.log(chalk.bgCyan("server is running on port 3000"))
})