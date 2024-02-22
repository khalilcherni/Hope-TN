const express=require("express")
const { getAllVoluntaryWork } = require("../controller/voluntarywork")
const router =express.Router()




router.get('/getAll',getAllVoluntaryWork)