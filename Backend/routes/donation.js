const express = require("express");
const router = express.Router();
const {get,deleted,put,posted} =require  ('../controller/donation')



  router.get('/donation',get)
  router.post('/donation',posted)
  router.delete('/donation/:id',deleted)
  router.put('/donation/:id',put)

  module.exports=router