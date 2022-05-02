const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')
module.exports = {
    db,
    createTable: function createTable() {
        db.run('CREATE TABLE log (id INTEGER,timestamp CHARACTER(20),title VARCHAR(255),description TEXT)')
    },
    close: function close() {
        db.close()
    }
}