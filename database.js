const mysql = require('mysql');
const sdb = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'05023431',
            database:'BillingAppDB',
            multipleStatements:true
        });
    

sdb.connect((err) => {
    if (!err){
    console.log('DB connection succeded.');
    }
else{
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
 }});

 module.exports = sdb;