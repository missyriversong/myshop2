// if no type:module
// const express = require('express')
// const products = require('./data/products')
import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
// import products from './data/products.js';  moved to db
import productRoutes from './routes/productRoutes.js'
import errorHandler from './middleware/errorMiddleware.js';

const app = express()
dotenv.config()
connectDB()

app.use('/api/products', productRoutes)
app.use('/api/product', productRoutes)


app.use(errorHandler)

// app.get('/api/products', (req, res) => {
//   res.json(products)
// })
// app.get('/api/product/:id', (req, res) => {
//   const product = products.find(p => p._id === req.params.id)
//   res.json(product)
// })
// remember to add / at beginning of route!!!!

app.listen(5000, console.log('Server is running on port 5000'))


