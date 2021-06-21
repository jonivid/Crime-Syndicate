const express = require('express')
const assignmentLogic = require('../logic/assignments-Logic')
const router = express.Router()

//Follow Or UnFollow vacation
router.post('/', async (req, res) => {
    try {
        const assignmentDetails = req.body
        const assignmentId = await assignmentLogic.addAssignment(assignmentDetails)
        res.json(assignmentId);
    }
    catch (err) {
        console.error(err);
        res.status(600).send(err.message)
    }
})

module.exports = router