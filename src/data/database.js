require('dotenv').config()
const mongoose = require('mongoose')

const MONGODB_URL =  process.env.MONGODB_URI || 'mongodb://localhost:27017/petz-db' 



const connect = () => {
  mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database conectada.'))
  .catch(error => console.error(error))
}

module.exports = { connect }
