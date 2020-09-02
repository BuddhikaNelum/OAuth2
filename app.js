const express = require('express')
const authRoutes = require('./routes/auth-route.js')

const app = express()

//set up view engine
app.set('view engine','ejs')

//set up routes
app.use('/auth', authRoutes)

//create home route
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('app listing on port 3000')
})