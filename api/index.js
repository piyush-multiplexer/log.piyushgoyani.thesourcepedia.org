const express = require('express')
const { db, createTable, addLog } = require('./db')



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/createTable', function (_req, res) {
    createTable()
    res.send('Table Created')
    db.close()
})

app.get('/addLog', function (_req, res) {
    addLog(1, new Date().getTime().toString(), "TTL", "DESC")
    res.send('Logged')
})

app.get('/test', function (_req, res) {
    res.send('Test successful')
})

export default {
    path: '/api',
    handler: app
}