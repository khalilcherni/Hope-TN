const express = require("express");

const router = express.Router();
const { getALLevents, addevent, update, getOneevents } = require("../controller/events");


router.get('/get', getALLevents);
router.post('/add',addevent)
router.put('/put/:id',update)
router.get('/:name',getOneevents)
module.exports=router