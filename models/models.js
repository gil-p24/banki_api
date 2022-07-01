import mongoose from "mongoose";

let question = new mongoose.Schema({
  "content": String,
     "diffculty-rating": Number, 
     "type": String,
})

export default mongoose.model('question', question)