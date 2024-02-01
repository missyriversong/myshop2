import express from 'express';
// import asyncHandler from 'express-async-handler'    move to controller
// import Product from '../models/productModel.js'     move to controller
import { getProducts, getProductById } from '../controllers/productController.js';
const router = express.Router()


// @desc fetches all products  
// @route get /api/products  
// @access to public  so no authentication needed

router.get('/', getProducts )
// router.get('/api/products', (req, res) => {
//   res.json(products)
// })

// asyncHandler(async (req, res) => {
//   const products = await Product.find({})     //mongodb command find in Product collection
//   res.json(products)
// })  move to controller

// @desc fetches one product by id 
// @route get /api/products/:id
// @access to public  so no authentication needed

router.get('/:id', getProductById)
// router.get('/api/product/:id', (req, res) => {
//   const product = products.find(p => p._id === req.params.id)
//   res.json(product)
// })


// asyncHandler(async(req, res) => {
//   const product = await Product.findById(req.params.id)
//   if (product){ 
//     res.json(product)
//   }else {
//     res.status(404).json({message: 'Product not found'})
//   }
// })   move to controller


export default router