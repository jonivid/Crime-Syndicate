const connection = require('./connection-wrapper')

async function getAlljobs() {
    let sql = `SELECT j.id as jobId, j.name, s.id as soldierId, s.first_name as firstName, s.last_name as lastName
    FROM jobs j left join assignments a on j.id = a.job_id 
    left join soldiers s on s.id=a.soldier_id`;
    const jobs = await connection.execute(sql)

    let jobsToJobDataMap = new Map();
    if (!jobs) {
        return jobsToJobDataMap;
    }

    for (let index = 0; index < jobs.length; index++) {
        let jobId = jobs[index].jobId;
        let jobData = jobsToJobDataMap.get(jobId);

        if (!jobData) {
            jobData = { name: jobs[index].name, soldiers: [] };
            jobsToJobDataMap.set(jobId, jobData);
        }

        if (jobs[index].soldierId) {
            const soldierFullName = jobs[index].firstName + " " + jobs[index].lastName;
            let soldier = { id: jobs[index].soldierId, name: soldierFullName };
            jobData.soldiers.push(soldier)
        }
    }

    return convertMapToObj(jobsToJobDataMap);
}

async function addJob(jobDetails) {
    console.log(jobDetails);
    let sql = `INSERT INTO jobs (name,date) 
    Values(?,?)`
    let parameters = [jobDetails.name, jobDetails.date]
    let result = await connection.executeWithParameters(sql, parameters)
    return result.insertId;
}

function convertMapToObj(jobsToJobDataMap) {
    let dataArray = [];
    for (let [key, value] of jobsToJobDataMap) {
        dataArray.push({ jobId: key, jobData: value });
    }

    return dataArray;
}

module.exports = { getAlljobs, addJob }