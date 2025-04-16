const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kasulavaishnavi4:Kasula2002@cluster0.dyqj3fj.mongodb.net/NoteApp")
.then(()=>{
    console.log("connection established")
}).catch((err)=>{
    console.log(`Error is : ${err}`)
})

// mongodb+srv://kasulavaishnavi4:kasula2002@cluster0.dyqj3fj.mongodb.net/
// mongodb+srv://kasulavaishnavi4:kasula2002@cluster0.dyqj3fj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://saswatabasu:saswata23@cluster0.ng91g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0npx 