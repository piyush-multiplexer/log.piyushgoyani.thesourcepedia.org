const express = require('express')
const { db, createTable } = require('./db')



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/createTable', function (_req, res) {
    createTable()
    res.send('Table Created')
    db.close()
})

app.get('/test', function (_req, res) {
    res.send('Test successful')
    db.close()
})

export default {
    path: '/api',
    handler: app
}