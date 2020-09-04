const mongoose = require('mongoose')
const keys = require('./keys')

const mongoDbUrl = 'mongodb://localhost:27017/oauth'

mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if (err) console.log('Mongoose Connection Error ', err)
    console.log('Mongoose connection success')
})