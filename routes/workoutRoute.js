const { Router} = require('express')
const workoutController = require('../controllers/workoutController')


const router = Router()


// get all workouts
router.get('/' , workoutController.workout_get);

// get a single workout
router.get('/:id' , workoutController.workout_single_get);

// post a new workout
router.post('/' , workoutController.workout_post);

// delete a new workout
router.delete('/:id' , workoutController.workout_delete);

// update a workout
router.patch('/:id' , workoutController.workout_update);



module.exports = router