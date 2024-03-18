const db = require('./../../models/index.js');

const checkExistenceStudent = async(req,res,next)=>{
    const student = req.body;
    const id  = student.id_student;
    const studentExist = await db.students.findOne({
        where:{id_student:id}
    });

    if (!!studentExist){
        res.status(409).send({
            message:`Student with ID : ${id} is already exist !`
        });
        return
    }
    next();
    console.log("pass");
}

module.exports = checkExistenceStudent;