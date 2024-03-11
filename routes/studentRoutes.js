const express  = require("express")
const router = express.Router()
const {createStudent,retrieveOneStudent,updateStudent,deleteStudent} = require("./../middlewares/studentMiddleware.js")


router.post("/students",createStudent);
router.get("/students/:id",retrieveOneStudent);
router.put("/students/:id",updateStudent);
router.delete("/students/:id",deleteStudent);

module.exports =router
