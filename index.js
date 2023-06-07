const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/careerbootcamp')
.then(()=>console.log("connection open!"))
.catch((e)=>console.log(e));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

app.get("/",(req,res)=>{    
    res.render("index");

})
app.listen(port, ()=>{
    console.log("App is listening on 3000");
})