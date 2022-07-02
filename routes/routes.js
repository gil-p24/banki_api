import { Router } from "express";
const router = Router()
import bankRoutes from './bankRoutes.js'

router.get("/", (req,res)=>{
  res.json({"message":"WASSUPP ITS WORKING"})
})

router.use("/question", bankRoutes)

export default router