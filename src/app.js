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
app.use(myConnection(mysql,{
    host: 'localhost',
    user:'root',
    password:'123456',
    port: 3306,
    database: 'todo'
},'single'))
app.use(express.urlencoded({extended:false}))
//routes

app.use("/", tareasRoutes );
app.listen(app.get("port"), () => {
    console.log("http:localhost:3000")
})