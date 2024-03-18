const {createStudent,retrieveOneStudent,updateStudent,deleteStudent,notesList,listOfAverageStudents} = require("./../middlewares/studentMiddleware.js");


const ApiStudent = Object.freeze({
    createStudent,
    retrieveOneStudent,
    updateStudent,
    deleteStudent,
    notesList,
    listOfAverageStudents
});

module.exports = ApiStudent;