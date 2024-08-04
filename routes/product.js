const express=require('express');
const { getProducts, getsingleProduct } = require('../controllers/productcontroller');
const router=express.Router();
router.route('/products').get(getProducts);

router.route('/products/:id').get(getsingleProduct);
module.exports=router;