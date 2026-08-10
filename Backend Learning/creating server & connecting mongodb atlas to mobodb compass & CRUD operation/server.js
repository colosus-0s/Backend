const app = require("./src/app.js")
const chalk = require("chalk")
const connectDB = require("./src/db/db.js")

connectDB()


app.listen(3000,function(){
      console.log(chalk.bgMagentaBright("server is running on port 3000"))
})