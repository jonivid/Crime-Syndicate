const express = require('express')
const cors = require('cors')
const soldiersController = require('./controller/soldiers-controller')
const jobsController = require('./controller/jobs-Controller')
const assignmentsController = require('./controller/assignments-controller')

const server = express()

server.use(cors({ origin: 'http://localhost:3000' }))
server.use(express.json())

server.use('/soldiers', soldiersController)
server.use('/jobs', jobsController)
server.use('/assignments', assignmentsController)
server.listen(3001, () => console.log('port 3001 is running'))
