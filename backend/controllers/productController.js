import asyncHandler from "../middlewares/asyncHandler.js"
import Product from "../models/product.js"


// @desc 
// @route GET /api/products
const getProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find({})
    res.json(products)

})


// @desc 
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async(req,res)=>{
    let product = await Product.findById(req.params.id)
    if(product) res.json(product)
    else{
        res.status(404)
        throw new Error('Resource not found')
    }

})

export {getProducts, getProductById}