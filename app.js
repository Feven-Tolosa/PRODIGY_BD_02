const express = require('express')
const connectDB = require('./db')
const app = express()

// Connect to MongoDB
connectDB()

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World')
})
// Routes will go here

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
