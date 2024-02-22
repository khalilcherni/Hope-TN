const express = require("express");

const router = express.Router();
const { getALLevents, addevent } = require("../controller/events");


router.get('/get', getALLevents);
router.post('/add',addevent)
module.exports=router