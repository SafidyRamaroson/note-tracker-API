const {Sequelize,DataTypes} = require("sequelize");
const dbConfig = require("./../config/db.config.js");
require("dotenv").config();

const database = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
})

const db = {}

db.Sequelize = Sequelize
db.databaseConf = database

//function drop the existing table and re-sync database
db.dropNoteManagementTable = ()=>{
    db.databaseConf.sync({force:true})
    .then(()=>{
        console.log('Note management Student table just dropped and db re-synced.')
    })
}

db.students = require("./student.model.js")(database,DataTypes)

module.exports = db