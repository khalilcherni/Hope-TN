const express=require("express")
const router =express.Router()

const {getAllQuestions , addQuestion,updateQuestion ,deleteQuestion} = require("../controller/qustions")
router.get("/getAll",getAllQuestions)
router.post("/add",addQuestion)
router.put("/put/:id",updateQuestion)
router.delete("/delete/:id",deleteQuestion)


module.exports=router