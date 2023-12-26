const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');

// get all workout
module.exports.workout_get = async (req, res) =>{

    try {
        const workouts = await Workout.find().sort({createdAt : -1})
        res.status(200).json(workouts)
    } catch (error) {
        res.status(404).json({mssg: "could get the workouts"})
    }
}

// get single  workouts
module.exports.workout_single_get = async(req, res) =>{
    const {id} = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({mssg: 'no such workout'})
        }
        const workout = await Workout.findById(id)
        if(!workout){
            return res.status(404).json({mssg: "workout not found"})
        }
        res.status(200).json(workout)
    } catch (error) {
        console.log(error.message)
    }
}

// post a new workout
module.exports.workout_post = async (req, res) =>{
    const {title, reps, load} = req.body;

    let emptyFields = []
    if(!title){
        emptyFields.push('title')
    } if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length >  0){
        return res.status(400).json({err: "Please fill in all fields", emptyFields})
    }

    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
}

// delete single workouts
module.exports.workout_delete = async(req, res) =>{
    const {id} = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({mssg: 'no such workout'})
        }
        const workout = await Workout.findByIdAndDelete(id)
        if(!workout){
            return res.status(404).json({mssg: "workout not found"})
        }
        res.status(200).json(workout)
    } catch (error) {
        console.log(error.message)
    }
}

// update single workouts
module.exports.workout_update = async(req, res) =>{  
    const {id} = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({mssg: 'no such workout'})
        }
        const workout = await Workout.findOneAndUpdate({_id:id}, {
            ...req.body
        })
        if(!workout){
            return res.status(404).json({mssg: "workout not found"})
        }
        res.status(200).json(workout)
    } catch (error) {
        console.log(error.message)
    }
}


