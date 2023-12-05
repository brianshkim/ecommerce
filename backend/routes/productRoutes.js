import express from "express";
import {getProducts, getProductById} from '../controllers/productController.js'
const router = express.Router()
import Product from '../models/product.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)


export default router;