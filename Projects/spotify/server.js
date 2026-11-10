const app = require("./src/app");
require('dotenv').config()
const connectedDB = require("./src/db/db")
const chalk = require("chalk");

connectedDB()

app.listen(3000, () => {
  console.log(
    chalk.magenta("server is running on ") +
      chalk.magenta(chalk.magenta.underline.bold("http://localhost:3000"),
  ))
});
