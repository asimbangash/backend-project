const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dynamicpro", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection succesfully");
}).catch((err)=>{
    console.log(err);
})