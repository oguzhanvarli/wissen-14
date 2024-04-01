const express = require('express')
const Product = require('../models/ProductModel')
const ProductRouter = express.Router()

ProductRouter.route('/product').post(async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).send(
      {
        //key: value,
        success: true,
        message: 'Product Created',
        product: product
      })
  } catch (error) {
    res.status(500).send({ success: false, message: error.message })
  }
})

ProductRouter.route('/product').delete(async (req, res) => {
  try {
    const { id } = req.body
    await Product.findByIdAndDelete(id)
    res.status(200).send({ success: true, message: 'Product Deleted!' })
  } catch (error) {
    res.status(500).send({ success: false, message: error.message })
  }
})
ProductRouter.route('/product/:id').get(async (req, res) => {
  try {
    const { id } = req.params
    let product = await Product.findById(id)
    res.status(200).send(product)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
ProductRouter.route("/products").get(async (req, res) => {
  try {
    let products = await Product.find({})
    res.status(200).send(products)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
ProductRouter.route('/product').put(async(req,res) => {
  try {
        const product = req.body
        const productFromDb = await Product.findByIdAndUpdate(product._id, product)
        res.status(200).send({success : true, message: 'Product Updated', product : productFromDb})
      } catch (error) {
        res.status(500).send(error.message)
      }
})


module.exports = ProductRouter