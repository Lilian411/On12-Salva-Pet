require('dotenv').config()
const mongoose = require('mongoose')

const connect = () => {mongoose.connect(
    process.env.DATABASE_URL, {
    useNewUrlParser: true,
    userUnifiedTopology: true
})
.then(console.log('Database conectada. '))
.catch(err => console.err)
}

module.exports = { connect }