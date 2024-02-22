const express = require("express");
const router = express.Router();
const {get,deleted,put,posted} =require  ('../controller/peoplewhohelp')



  router.get('/people',get)
  router.post('/people',posted)
  router.delete('/people/:id',deleted)
  router.put('/people/:id',put)

  module.exports=router