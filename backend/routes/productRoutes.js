import express from 'express';
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find({})     //mongodb command find in Product collection
  res.json(products)
}))
// router.get('/api/products', (req, res) => {
//   res.json(products)
// })

router.get('/:id',  asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)
  if (product){ 
    res.json(product)
  }else {
    res.status(404).json({message: 'Product not found'})
  }
}))
// router.get('/api/product/:id', (req, res) => {
//   const product = products.find(p => p._id === req.params.id)
//   res.json(product)
// })


export default router