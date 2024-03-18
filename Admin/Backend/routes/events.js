const express = require("express");

const router = express.Router();
const { getALLevents, addevent, update, getOneevents, deleteevents } = require("../controller/events");


router.get('/get', getALLevents);
router.post('/add',addevent)
router.put('/put/:id', update); // Change the route here
router.get('/get/:name', getOneevents); // Change the route here
router.delete('/delete/:id', deleteevents); // Change the route here

module.exports=router