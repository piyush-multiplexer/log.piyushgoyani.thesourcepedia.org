const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('test.db')
module.exports = {
    db,
    createTable: function createTable() {
        db.run('CREATE TABLE log (id INTEGER,timestamp CHARACTER(20),title VARCHAR(255),description TEXT)')
    },
    addLog: function addLog(id, timestamp, title, description) {
        const q = `INSERT INTO log (id, timestamp, title, description) VALUES(${id}, "${timestamp}", "${title}", "${description}")`
        console.log(q)
        db.run(q)
    },
    close: function close() {
        db.close()
    }
}