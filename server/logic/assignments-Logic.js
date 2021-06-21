const express = require('express')
const assignmentDao = require('../dao/assignments-dao')
const router = express.Router()

async function addAssignment(assignmentDetails) {
    const result = await assignmentDao.addAssignment(assignmentDetails)
    return result
}



module.exports = { addAssignment }