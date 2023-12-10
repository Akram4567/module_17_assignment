const {app, connectDB} = require('./app')

const PORT = 5080

app.listen(PORT, async() => {
    console.log(`server is runnig on port ${PORT}`)
    await connectDB()
})