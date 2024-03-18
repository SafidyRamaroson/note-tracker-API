const express  = require("express")
const router = express.Router()
const ApiStudent = require("./../middlewares/index.js")
const checkExistenceStudent = require("./../services/studentsServices/checkExistenceStudent.js");


router.get("/students/notes",ApiStudent.notesList);
router.post("/students/new",checkExistenceStudent,ApiStudent.createStudent);
router.get("/students/:id",ApiStudent.retrieveOneStudent);
router.put("/students/:id",ApiStudent.updateStudent);
router.delete("/students/:id",ApiStudent.deleteStudent);
router.get("/students/notes/average",ApiStudent.listOfAverageStudents);
module.exports =router;
