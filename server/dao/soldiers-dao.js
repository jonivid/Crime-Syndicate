const connection = require('./connection-wrapper')

async function addSoldier(soldierRegistrationDetails) {
    let sql = `INSERT INTO soldiers (first_name, last_name)
    VALUES(?,?);`

    let parameters = [soldierRegistrationDetails.firstName, soldierRegistrationDetails.lastName]
    let userRegistrationResult = await connection.executeWithParameters(sql, parameters)
    return userRegistrationResult.insertId;
}

module.exports = { addSoldier }