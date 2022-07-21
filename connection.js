import mongoose from "mongoose";
import chalk from "chalk";


let connectionString = process.env.MONGO_URL ||  "mongodb://127.0.0.1:27017/Bank";

let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(connectionString, mongooseConfig);

const db = mongoose.connection;
//if the connection fails log the error
db.on("error", (error) => {
  console.error(chalk.red(error));
});


db.once("disconnected", () => {
  console.log(chalk.red("Disconnected from MONGODB"));
});
export default db;