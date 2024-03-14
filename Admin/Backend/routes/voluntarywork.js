const express=require("express")
const { getAllVoluntaryWork, addVoluntaryWork,updateVoluntaryWork,deleteVoluntaryWork } = require("../controller/voluntarywork")
const router =express.Router()




router.get('/getAll',getAllVoluntaryWork)
router.post('/add', addVoluntaryWork);
router.put('/update/:id', updateVoluntaryWork);
router.delete('/delete/:id', deleteVoluntaryWork);

module.exports = router;
