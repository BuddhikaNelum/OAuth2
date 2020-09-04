const express = require('express')
const authRoutes = require('./routes/auth-route.js')
const passportSetup = require('./config/passport-setup.js')
const mongoose = require('mongoose')
const keys = require('./config/keys')

const app = express()

//set up view engine
app.set('view engine','ejs')

//connect to mongo de
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('Connected to mongodb')
})

//set up routes
app.use('/auth', authRoutes)

//create home route
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('app listing on port 3000')
})