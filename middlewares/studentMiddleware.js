const db = require("./../models/index.js")

// create student 
const createStudent = async(req,res)=>{
    const data = req.body;
    try {
        const student = await db.students.create(data);
        res.send(student)
    } catch (error) {
        console.error(error)
    }
}

//retrieve one student by
const retrieveOneStudent = async(req,res)=>{
    const id = req.params.id;
    try {
        const student = await db.students.findOne({where:{id}});
        //if student don't exist in DB 
        if(!student){
            res.send({
                student:"Student not found"
            })
        }
        
        res.send({
            Student:student
        })
    }catch(error){
        console.error(error);
    }

}

// update student
const updateStudent = async(req,res)=>{
    const id = req.params.id;
    const data = req.body;

    try {
        await db.students.update(data,{where:{id}});
        res.send("Student updated");
    } catch (error) {
        res.send(error)
    }
}

//delete student
const deleteStudent = async(req,res)=>{
    const id = req.params.id;
    try {
        await db.students.destroy({where:{id}})
        res.send("Student deleted")
    } catch (error) {
        res.send(error)
    }
}




module.exports = {
    createStudent,
    retrieveOneStudent,
    updateStudent,
    deleteStudent
}