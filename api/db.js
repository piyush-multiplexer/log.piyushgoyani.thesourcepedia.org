const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('pg-logs.db')
module.exports = {
    db,
    createTable: function createTable() {
        db.run('CREATE TABLE log (id INTEGER,createdAt CHARACTER(20),date CHARACTER(20),title VARCHAR(255),description TEXT)')
    },
    addLog: function addLog(id, timestamp, title, description) {
        const q = `INSERT INTO log (id, timestamp, title, description) VALUES(${id}, ${timestamp}, "${title}", "${description}")`
        console.log(q)
        db.run(q)
    },
    close: function close() {
        db.close()
    }
}