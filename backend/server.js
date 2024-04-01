// console.log('Hello Node.js')
// console.log('Hello Node.js 2')

const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/ProductModel')
const app = express()

app.use(express.json())

//ROUTER IMPORT
const UserRouter = require('./router/UserRouter')
const ProductRouter = require('./router/ProductRouter')

//MONGODB CONNECTION
mongoose.connect("mongodb+srv://oguzhnv:lcx3TfuySlGCAUyL@cluster0.g04z4ts.mongodb.net/wissen14?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB Connected!'))
  .catch((error) => {
    console.log(error)
  })



app.get("/", (req, res) => {
  res.send('Artık Mola Hocam')
})


//ROUTER
app.use("/user", UserRouter)
app.use("/product", ProductRouter)





// app.get('/products', async (req, res) => {
//   try {
//     let products = await Product.find({})
//     res.status(200).send(products)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })

// app.post("/addProduct", async (req, res) => {
//   try {
//     let product = req.body
//     let createdProduct = await Product.create(product)
//     res.status(200).send(createdProduct)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })
// app.get('/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     let product = await Product.findById(id)
//     res.status(200).send(product)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })
// app.put('/product', async(req, res) => {
//   try {
//     // const id = req.body.id
//     // const username = req.body.usernanme
//     // const email = req.body.email

//     //const {id, username, email} = req.body
//     const product = req.body
//     const productFromDb = await Product.findByIdAndUpdate(product._id, product)
//     res.status(200).send({success : true, message: 'Product Updated', product : productFromDb})
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })
// app.delete("/product", async(req,res) => {
//   try {
//     const {id} = req.body
//     let deletedProduct = await Product.findByIdAndDelete(id)
//     if(deletedProduct){
//       res.status(200).send({success: true,message: 'Product Deleted!'})
//     }else{
//       res.status(404).send({success: false,message: 'Product Not Found!'})
//     }
//   } catch (error) {
//     res.status(500).send({success: false, message: error.message})
//   }
// })






// app.get('/products2' , (req, res) => {
//   res.send('Here is Products2')
// })

app.listen(3000)


// {
//   const name = ""
//   let age = 28
//   var surname = "Varlı"


//   age = "Oğuzhan"

//   console.log(name)
//   console.log(age)
//   console.log(surname)

// }


// console.log(surname)

// function first(){

// }

// second = (req, res) => {

// }








