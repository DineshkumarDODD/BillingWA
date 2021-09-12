const db = require('../database.js');

exports.ProductPost =  (req, res) => {
    let pro = req.body
    console.log(req.body)
    const sqlinsert = 'INSERT INTO Products (Product_Code,Product_Name,Price) VALUES(?,?,?)';
    db.query(sqlinsert,[pro.Product_Code,pro.Product_Name,pro.Price],(err, result) => {
        if (!err)
            res.send(result);
        else
            console.log(err);
    })
};

exports.ProductGet =  (req,res) => {
    db.query('SELECT * FROM Products', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.ProductDelete =  (req, res) => {
    console.log(req.params.product_code)
    db.query('DELETE FROM Products WHERE Product_Code = ?', [req.params.product_code], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
};

exports.ProductUpdate =  (req, res) => {
    let pro = req.body
    console.log(req.body)
    const sqlinsert = 'Update Products SET Product_Name= ?,Price = ? Where Product_Code= ?';
    db.query(sqlinsert,[pro.Product_Name,pro.Price,req.params.product_code],(err, result) => {
        if (!err)
            res.send(result);
        else
            console.log(err);
    })
};