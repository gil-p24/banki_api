import mongoose from "mongoose";

let question = new mongoose.Schema({
  "question": String,
     "diffculty-rating": Number, 
     "type": String,
})

export default mongoose.model('question', question)