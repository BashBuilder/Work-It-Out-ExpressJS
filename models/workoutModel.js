const mongoose = require('mongoose')


const workoutSchema = mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    reps :{
        type : String,
        required : true,
    },
    load : {
        type : Number,
        required : true
    }
}, {timestamps : true})

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;