const db = require('../database.js');

exports.ProductsPost =  (req, res) => {
    let pro = req.body
    console.log(req.body)
    const sqlinsert = 'INSERT INTO Products_Sales (Invoice_ID,Product_Code,Quantity,Price) VALUES(?,?,?,?)';
    db.query(sqlinsert,[pro.Invoice_ID,pro.Product_Code,pro.Quantity,pro.Price],(err, result) => {
        if (!err)
            res.send(result);
        else
            console.log(err);
    })
};

exports.ProductsGet =  (req,res) => {
    db.query('SELECT * FROM Products_Sales', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
}