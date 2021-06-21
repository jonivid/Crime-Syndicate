const jobsDao = require('../dao/jobs-dao')


async function getAlljobs() {
    const jobs = await jobsDao.getAlljobs()
    return (jobs)
}

async function addJob(jobDetails) {
    const jobId = await jobsDao.addJob(jobDetails)
    return jobId

}

module.exports = { getAlljobs, addJob }