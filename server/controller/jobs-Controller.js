const express = require('express')
const jobsLogic = require('../logic/jobs-logic')
const router = express.Router()

//get all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await jobsLogic.getAlljobs();
        res.json(jobs)

    }
    catch (err) {
        console.error(err);
        res.status(600).send(err.message)

    }

})
// create job
router.post('/', async (req, res) => {

    try {
        const jobDetails = req.body;
        const jobId = await jobsLogic.addJob(jobDetails)
        res.json(jobId)

    }
    catch (err) {
        console.error(err);
        res.status(600).send(err.message)
    }

})
module.exports = router