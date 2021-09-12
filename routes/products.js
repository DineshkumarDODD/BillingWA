const express = require("express");
const router = express.Router();
const db = require('../database.js');
const {ProductPost,ProductGet,ProductDelete,ProductUpdate} = require('../controllers/product')


router.post('/product/post',ProductPost);

router.get("/product",ProductGet)

router.delete('/product/delete/:product_code',ProductDelete)

router.put('/product/update/:product_code',ProductUpdate)

module.exports = router;