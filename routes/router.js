//import express

const express =require('express')

//import productcontroller

const productController= require('../controllers/productController')


//creating object for router class

const router=new express.Router()


//resolve client request 
//all api cals will be resolves

//get all products
router.get('/products/all-products',productController.getAllProducts)

router.get('/products/viewproduct/:id',productController.viewProduct)

//export router
module.exports=router