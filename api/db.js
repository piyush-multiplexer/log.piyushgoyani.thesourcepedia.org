const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('pg-logs.db')
module.exports = {
    db,
    createTable: function createTable() {
        db.run('CREATE TABLE log (id INTEGER PRIMARY KEY AUTOINCREMENT, createdAt CHARACTER(20), date CHARACTER(20), title VARCHAR(255), description TEXT)')
    },
    addLog: function addLog(createdAt, date, title, description) {
        const q = `INSERT INTO log (createdAt, date, title, description) VALUES(${createdAt}, "${date}", "${title}", "${description}")`
        db.run(q)
    },
    close: function close() {
        db.close()
    }
}