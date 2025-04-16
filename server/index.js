const express = require("express");
const cors = require("cors")

const app = express();

//Port 
const port = process.env.PORT || 4000

//Database Conncetion
require("./database/connection");


//Require Routes
const noteRoutes = require("./routes/notesRoutes");

app.get("/", (req,res)=>{
    res.send("hello");
})


//middleware
app.use(express.json());
app.use(cors());

//Routes 

app.use("/api",noteRoutes)

app.listen(port,()=>{
    console.log(`Server is running at PORT: ${port}`);
})