const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kasulavaishnavi4:Kasula2002@cluster0.dyqj3fj.mongodb.net")
.then(()=>{
    console.log("connection established")
}).catch((err)=>{
    console.log(`Error is : ${err}`)
})
