const express = require('express')
const { createTable, migrateAuth, getUser, addLog, getLogs } = require('./db')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', function (_req, res) {
    res.send('<h2>Functions</h2><ul><li>Create Table</li><li>Add Log</li><li>Get Logs</li></ul>')
})

app.get('/createTable', function (_req, res) {
    createTable()
    res.send('Table Created')
})

app.post('/addLog', function (_req, res) {
    const body = _req.body
    const createdAt = new Date().getTime().toString()
    addLog(createdAt, body.date, body.title, body.description)
    res.json({ flag: true, message: 'Log added' })
})

app.get('/getLogs', async function (_req, res) {
    res.json({
        flag: true,
        data: await getLogs()
    })
})

export default {
    path: '/api',
    handler: app
}