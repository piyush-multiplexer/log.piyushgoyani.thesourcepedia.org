const express = require('express')
const { createTable, addLog } = require('./db')



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/createTable', function (_req, res) {
    createTable()
    res.send('Table Created')
})

app.post('/addLog', function (_req, res) {
    const body = _req.body
    const createdAt = new Date().getTime().toString()
    addLog(createdAt, body.date, body.title, body.description)
    res.json({ flag: 'true', message: 'Log added' })
})

app.get('/test', function (_req, res) {
    res.send('Test successful')
})

export default {
    path: '/api',
    handler: app
}