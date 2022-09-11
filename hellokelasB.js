'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('<p>Hello world!</p> <p>PPL2 Unpad kelas B </p>')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)