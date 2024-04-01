const { Schema, default: mongoose } = require("mongoose");

const productModel = new Schema({
  title : {type: String, required: true},
  price : {type: Number, required: true},
  quantity : {type: Number, required: true},
  image : {type: String, required: true},
})

const Product = mongoose.model('Product', productModel)
module.exports = Product
