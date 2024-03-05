const express = require("express");
const router = express.Router();
const {get,deleted,put,posted,getOnecourse} =require  ('../controller/schoolcourses')



  router.get('/school/get',get)
  router.post('/school',posted)
  router.delete('/school/:id',deleted)
  router.put('/school/:id',put)
  router.get('/get/:name',getOnecourse)
  module.exports=router