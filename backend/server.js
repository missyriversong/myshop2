// if no type:module
// const express = require('express')
// const products = require('./data/products')
import dotenv from 'dotenv'
import express from 'express';
import connectDB from './config/db.js';
// import products from './data/products.js';  moved to db
import productRoutes from './routes/productRoutes.js'
import errorHandler from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use(express.json())   //converts data function

app.use('/api/products', productRoutes)

// if you don't update productScreen api
// app.use('/api/product', productRoutes)


app.use('/api/users/', userRoutes)

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


