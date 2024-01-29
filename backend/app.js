const express = require('express')
const cors = require('cors');
const app = express()
const {db} = require('./db/db.js')
const {readdirSync} = require('fs')

require('dotenv').config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route)=>app.use('/api/v1' , require('./routes/' + route)))

const server = ()=>{
    db()
    app.listen(PORT , ()=>{
        console.log('listening to' , PORT)
    })
}

server()