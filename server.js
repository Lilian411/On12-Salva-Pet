const app = require('./src/app')

const PORT = process.env.PORT || 8888

app.listen(PORT, () => {
    console.log(`Olá mundo, estou na  ${PORT}`)
})