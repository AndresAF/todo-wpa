const app = require("express")();
const path = require("path")
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 3000)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
//middlewares 
const tareasRoutes = require("./routes/tareasRoutes");
const { urlencoded } = require("express");
const express = require("express");
app.use(morgan("dev"));


app.use(express.urlencoded({extended:false}))
//routes

app.use("/", tareasRoutes );
app.listen(app.get("port"), () => {
    console.log("http:localhost:3000")
})




// USER b2aff2868c0c16

//  PASSWORD 1454ff90

// HOST us-cdbr-east-05.cleardb.net
