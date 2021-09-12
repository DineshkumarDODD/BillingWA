const express = require('express');
var app = express();
const bodyparser = require('body-parser');

//import routes
const InvoiceRoutes = require("./routes/invoice");
const ProductsRoutes = require("./routes/product_sales");
const ProductRoutes = require("./routes/products");

//middleware
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json())


//middleware routes
app.use("/api", InvoiceRoutes);
app.use("/api", ProductsRoutes);
app.use("/api", ProductRoutes);

app.listen(3000, () => console.log('Express server is running at port no : 3000'));

