const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const PORT  = process.env.PORT || 5000;
const corsOptions = require("./config/appConfig.js");
const db = require("./models/index.js");
const studentRoutes = require("./routes/studentRoutes.js");

app.use(cors());
//parse all of incomming request application.json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
app.use("/api",studentRoutes);
// run server on port 3000
app.listen(PORT ,()=>{
    console.log(`Server running on port ${PORT}`)
});
// db.databaseConf.sync();
// db.students.drop();

