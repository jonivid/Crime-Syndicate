const express = require('express')
const soldiersLogic = require('../logic/soldiers-logic')
const router = express.Router()
let cacheModule = require("../logic/cache-module");

//add soldier
router.post('/', async (req, res) => {
    try {
        console.log('register');
        const soldierRegistrationDetails = req.body;
        const id = await soldiersLogic.addSoldier(soldierRegistrationDetails)
        res.json(id)
    }
    catch (err) {
        console.error(err);
        res.status(600).send(err.message)
    }
})
module.exports = router