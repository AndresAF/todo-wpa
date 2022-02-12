const express = require("express");
const pool = require("../lib/database")
const router = express.Router();

const controller = require("../controllers/tareasController")

router.get('/', controller.list)
router.post("/add", controller.add)
router.get("/delete/:id", controller.delete)
router.get("/edit/:id", controller.edit)
router.post("/update/:id", controller.update)
module.exports = router;