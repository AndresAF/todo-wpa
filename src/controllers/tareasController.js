var controller = {};
var alert = require('alert');
const pool = require("../lib/database")

controller.list = 
    (req,res) => { req.getConnection((err,conn) => {
        conn.query("SELECT * FROM tareas", (err, tareas) => {
 
            res.render("tareas.ejs", {
                data: tareas
            })
        })
    })}

    controller.add = (req, res) => {
      console.log(req.body)
   var data = req.body
    req.getConnection((err,conn) => {
          if(req.body.tarea != ""){
              
        
        conn.query("INSERT INTO tareas set ?", [data] ,(err, tareas) => {
           res.redirect("/")
       
        });
    }
    else{
        console.log("agrega una tarea")
    }
       
    })
    
    };
    controller.delete = (req, res) => {
        var id = req.params.id
        req.getConnection((err, conn) => {
            conn.query("DELETE FROM tareas WHERE id = ?",[id], (err,id) => {
                res.redirect("/")
            })
        })
    }

    controller.update = (req, res) => {
        const id = req.params.id;
        const nuevaTarea = req.body;
        req.getConnection((err,conn) => {
            conn.query("UPDATE tareas set ? WHERE id = ?", [nuevaTarea, id], (err,update) => {
                console.log(nuevaTarea)
                res.redirect("/")
            })
        })

    }
controller.edit = (req, res) => {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM tareas WHERE id = ?", [id], (err, data) => {
            res.render("edit.ejs", {
                data: data[0]
            })
        })
    })
}

module.exports = controller;