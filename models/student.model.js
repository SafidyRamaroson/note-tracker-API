module.exports = (database,DataTypes)=>{
    const Student = database.define(
        "student",//model name
        {   
            // Model attributes
            id_student:{
                type:DataTypes.STRING(10),
                allownull:false,
                primaryKey:true
            },
            name:{
                type:DataTypes.STRING(25),
                allownull:false
            },
            note_Math:{
                type:DataTypes.DOUBLE,
                validate:{
                    min:0,
                    max:20
                }
            },
            note_Phy:{
                type:DataTypes.DOUBLE,
                validate:{
                    min:0,
                    max:20
                }
            }
        },
        {
            // option
            timestamps:false,
        }
    );

    return Student
}