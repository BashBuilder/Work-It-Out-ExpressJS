require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workoutRoute')
const mongoose = require('mongoose')
const cors = require('cors')



const app = express();
app.use(
    cors({
    origin: 'http://localhost:3000',
    })
)

// middleware secctions
app.use(express.json())

// connect to database
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{ app.listen(4000, ()=> console.log('Server is listening on port', process.env.PORT))})
    .catch( error => console.log(error))


app.use('/api/workouts', workoutRoutes)






