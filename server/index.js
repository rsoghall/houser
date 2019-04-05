const express = require('express')
require('dotenv').config()
const massive = require('massive')
const ctrl = require('./controller')

const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('DB Set')
    })

    app.get(`/api/houses`, ctrl.read)
app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))