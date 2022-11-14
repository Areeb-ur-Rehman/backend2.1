const express=require('express')
const Router=express.Router()


const {subtractingNumber}=require('../controler/controllere')
Router.post('/subtract',subtractingNumber)
module.exports=Router