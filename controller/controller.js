// outline of req goes here\
import Question from "../models/models.js"

export const findAllQuestions = async (req,res) => {
  try {
    let results = await Question.find()
    res.json(results)
  }catch(err){
    res.json({message: err})
  }
}

export const findOneQuestion = async (req,res) => {
  try {
    let { id } = req.params
    let results = await Question.find({_id : id})
    res.json(results)
  }catch(err){
    res.json({message: err})
  }
}
export const updateOneQuestion = async (req,res) => {
  try {
    let { id } = req.params
    let { body } = req
    let results = await Question.findByIdAndUpdate(id,body,{returnOriginal: false})
    res.json(results)
  }catch(err){
    res.json({message: err})
  }

}
export const createOneQuestion = async (req,res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).json(newQuestion)
  }catch(err){
    res.json({message: err})
  }

}
export const deleteOneQuestion = async (req,res) => {
  try {
    let { id } = req.params
    let deleted = await Question.findByIdAndDelete({_id : id})
    res.json(deleted)
  }catch(err){
    res.json({message: err})
  }

}