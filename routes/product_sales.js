const express = require("express");
const router = express.Router();
const {ProductsPost,ProductsGet} = require('../controllers/product_sales')


router.post('/products/post',ProductsPost);

router.get("/products",ProductsGet)

module.exports = router;