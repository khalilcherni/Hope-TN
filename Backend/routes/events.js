const express = require("express");

const router = express.Router();
const { getALLevents, addevent, update } = require("../controller/events");


router.get('/get', getALLevents);
router.post('/add',addevent)
router.put('/put/:id',update)
module.exports=router