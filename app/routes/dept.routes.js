const express=require('express');
const router=express.Router();
const deptController=require('../controllers/dept.controller');
//get
router.get('/',deptController.getAllDeptController)

//post
router.post('/',deptController.postnewDeptController)

module.exports = router;