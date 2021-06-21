const connection = require('./connection-wrapper')

async function addAssignment(assignmentDetails) {
    let sql = `INSERT INTO assignments (soldier_id,job_id) 
    Values(?,?)`
    let parameters = [assignmentDetails.soldierId, assignmentDetails.jobId]
    let result = await connection.executeWithParameters(sql, parameters)
    return result.insertId;
}


module.exports = { addAssignment }