module.exports = (database,DataTypes)=>{
    const Student = database.define(
        "student",//model name
        {   
            // Model attributes
            id_student:{
                type:DataTypes.INTEGER,
                allownull:false,
                autoIncrement:true,
                primaryKey:true
            },
            name:{
                type:DataTypes.STRING,
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