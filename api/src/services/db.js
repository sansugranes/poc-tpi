const mysql = require('mysql2/promise');

// TODO(sss): put in config file in some way, .env?
const dbconfig = {
    host: "api-mysql",
    user: "user",
    password: "pwd",
    database: "test",
};

let m_db;
// db connection singleton
// TODO(sss): look for better implementation, is it worth it?
async function getDbConnection() {
    if (!m_db) {
        console.log('Creating database connection instance...');
        m_db = await mysql.createConnection(dbconfig);
    }
    return m_db;
}

// query database
async function query(sql, params) {
    const connection = await getDbConnection();
    const [result, ] = await connection.execute(sql, params);

    return result;
}

module.exports = {
    query
}