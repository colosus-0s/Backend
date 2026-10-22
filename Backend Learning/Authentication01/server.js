const app = require("./src/app")
const connectDB = require("./src/db/db")
require("dotenv").config()

connectDB()


app.listen(3000,()=>{
      console.log('server is running in port https://localhost:3000')
})