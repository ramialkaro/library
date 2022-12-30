const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5544


app.listen(PORT, () => console.log(`Server started on ${PORT}`))