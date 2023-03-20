const db = require('./db');
const helper = require("../helper");

// get multiple
async function getMultiple(page = 1) {
    const response = await db.query(`
        SELECT idQuestion, queContent, queAuthor, queCreated_at
        FROM question; 
    `);

    console.log(response);
    return helper.emptyOrRows(response);
}

module.exports = {
    getMultiple,
}