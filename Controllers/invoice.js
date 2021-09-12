const db = require('../database.js');


exports.InvoicePost = (req, res) => {
    let inv = req.body
    console.log(req.body)
    const sqlinsert = 'INSERT INTO Invoice (Invoice_Date,Name,Mobile,Address) VALUES(?,?,?,?)';
    db.query(sqlinsert,[inv.Invoice_Date,inv.Name,inv.Mobile,inv.Address],(err, result) => {
        if (!err)
            res.send(result);
        else
            console.log(err);
    })
}

exports.InvoiceGet = (req,res) => {
    db.query('SELECT * FROM Invoice', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
}