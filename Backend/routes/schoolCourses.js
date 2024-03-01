const express = require("express");
const router = express.Router();
const {get,deleted,put,posted} =require  ('../controller/schoolcourses')



  router.get('/school/get',get)
  router.post('/school',posted)
  router.delete('/school/:id',deleted)
  router.put('/school/:id',put)

  module.exports=router