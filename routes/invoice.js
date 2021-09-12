const express = require("express");
const router = express.Router();
// const db = require('../database.js');
const {InvoiceGet,InvoicePost} = require('../controllers/invoice')


router.post('/invoice/post',InvoicePost);

router.get("/invoice",InvoiceGet)

module.exports = router;