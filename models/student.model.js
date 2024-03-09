module.exports = (database,Sequelize,DataTypes)=>{
    const Student = database.define(
        "student",//model name
        {   
            // Model attributes
            num_id:{
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
                type:DataTypes.INTEGER,
                validate:{
                    min:0,
                    max:20
                }
            },
            note_Phy:{
                type:DataTypes.INTEGER,
                validate:{
                    min:0,
                    max:20
                }
            }
        },
        {
            // option
            timestamps:true
        }
    );

    return Student
}