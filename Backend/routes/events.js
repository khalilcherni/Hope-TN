const express = require("express");

const router = express.Router();
const { getALLevents } = require("../controller/events");


router.get('/get', getALLevents);

module.exports=router