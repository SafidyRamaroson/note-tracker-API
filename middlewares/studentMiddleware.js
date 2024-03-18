const db = require("./../models/index.js");
const { Sequelize } = require("sequelize");
// create student 
const createStudent = async(req,res)=>{
    const data = req.body;
    try {
        await db.students.create(data);
        res.status(201).send({
            message:"Student created successfully !"
        });
    } catch (error) {
        console.error(error);
    }
}

//retrieve one student by
const retrieveOneStudent = async(req,res)=>{
    const id = req.params.id;
    try {
        const student = await db.students.findOne({where:{id_student:id}});
        //if student don't exist in DB 
        if(!student){
            return  res.status(204).send({
                student:"Student not found"
            });
        }
        
        res.status(200).send({
            Student:student
        });
    }catch(error){
        console.error(error);
    }

}

// update student
const updateStudent = async(req,res)=>{
    const id = req.params.id;
    const data = req.body;

    try {
        await db.students.update(data,{where:{id_student:id}});
        res.send("Student updated");
    } catch (error) {
        res.send(error.errors[0].message)
    }
}

//delete student
const deleteStudent = async(req,res)=>{
    const id = req.params.id;
    try {
        await db.students.destroy({where:{id_student:id}});
        res.status(204).send("Student deleted");
    } catch (error) {
        res.send(error);
    }
}

//get all notes
const notesList = async(req,res)=>{
    try {
        const notesList = await db.students.findAll();
        //if notesList is null
        if(!notesList){
            res.send({
                message:"Notes list is none"
            });
        }
        res.status(200).send(notesList);
    } catch (error) {
        res.send(error);
    }
}


//get list of average note students 
const listOfAverageStudents = async(req,res) =>{
    try {
        const averageNotes = await db.students.findAll({
            attributes: [
                [Sequelize.literal('(`note_Math` + `note_Phy`) / 2'), 'average_note']
            ]
        });

        res.send(averageNotes);
    } catch (err) {
        console.error("Error fetching average notes",err);
    }
} 

module.exports = {
    createStudent,
    retrieveOneStudent,
    updateStudent,
    deleteStudent,
    notesList,
    listOfAverageStudents,
}