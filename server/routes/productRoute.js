import express from 'express'
const router = express.Router()

import {
  getProducts, 
  getOneProduct
} from '../controllers/productController.js'

router.route('/').get(getProducts);
// remember about :id
router.route('/:id').get(getOneProduct);

export default router