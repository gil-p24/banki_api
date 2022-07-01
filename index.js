import db from "./connection.js";
import express from "express"
import cors from "cors";
import chalk from "chalk";
import router from "./routes/routes.js";

const app = express()
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/", router);

db.on("connected",()=>{

  app.listen(PORT,()=>{
    console.log(
        chalk.cyan(
          `Express server running in development on: http://localhost:${PORT}`
        )
      );
  })

})
