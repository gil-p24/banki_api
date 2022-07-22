import db from "../connection.js";
import question from "../models/models.js";
import data from "./questions.json" assert {type: "json"}


const seed = async () => {
  await question.insertMany(data)
  db.close()
}


seed()


