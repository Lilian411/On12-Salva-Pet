const mongoose = require('mongoose')

const connect = () => {mongoose.connect('mongodb://localhost27017/petz-db',{
    useNewUrlParser: true,
    userUnifiedTopology: true
})
.then(console.log('Database conectada. '))
.catch(err => console.err)
}

module.exports = { connect }