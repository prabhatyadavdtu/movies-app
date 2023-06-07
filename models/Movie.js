const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:10
    },
    runtime:{
        type:Number,
        min:1,
        max:[5,"movie runtime can't exceed 5 hrs"],
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Movie = mongoose.Model('Movie', movieSchema);
module.exports = Movie;