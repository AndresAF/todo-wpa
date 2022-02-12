const {database} = require("../lib/keys")
const mysql = require("mysql")
const {promisify}  = require("util")
const pool = mysql.createPool(database)


pool.getConnection((err, con) => {
if(err){
    console.log(err)
}
else{
    console.log("bien")
}
})
pool.query = promisify(pool.query)
module.exports = pool

