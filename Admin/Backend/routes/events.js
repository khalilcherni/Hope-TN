const express = require("express");

const router = express.Router();
const { getALLevents, addevent, update, getOneevents, deleteevents } = require("../controller/events");


router.get('/get', getALLevents);
router.post('/add',addevent)
router.put('/events/put/:id',update)
router.get('/:name',getOneevents)
router.delete('/:id',deleteevents)
module.exports=router