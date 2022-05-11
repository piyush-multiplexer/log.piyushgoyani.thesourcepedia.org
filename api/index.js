const express = require('express')
const { createTable, migrateAuth, addLog, getLogs } = require('./db')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', function (_req, res) {
    res.send('<h2>Functions</h2><ul><li>Create Table</li><li>Migrate Auth</li><li>Add Log</li><li>Get Logs</li><li>Auth Login</li><li>Auth User</li></ul>')
})

app.get('/createTable', function (_req, res) {
    createTable()
    res.send('Table Created')
})

app.get('/migrateAuth', async function (_req, res) {
    await migrateAuth()
    res.send('Auth Initialized')
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

app.get('/test', function (_req, res) {
    res.send('Test successful')
})

app.post('/auth/login', function (_req, res) {
    res.json({
        flag: true,
        message: 'Login successful'
    })
})
app.get('/auth/user', function (_req, res) {
    res.json({
        username: 'admin',
        token: '123456789'
    })
})

export default {
    path: '/api',
    handler: app
}