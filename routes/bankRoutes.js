import { Router } from "express";
import * as controller from "../controller/controller.js"
const router = Router()

router.get("/",(req,res)=>res.json({message:"wrong route"}))
router.get("/all",controller.findAllQuestions)
router.get("/byId/:id",controller.findOneQuestion)
router.put("/update/:id",controller.updateOneQuestion)
router.delete("/del/:id",controller.deleteOneQuestion)
router.post("/create",controller.createOneQuestion)

export default router


// sdsdsdsd