const usersDao = require('../dao/soldiers-dao')
const crypto = require("crypto");
let cacheModule = require("./cache-module");
const jwt = require('jsonwebtoken');
const config = require('../config.json');

const saltRight = "asdasdasdas";
const saltLeft = "--mnlcfdsfsds;@!$ ";


async function addSoldier(soldierRegistrationDetails) {
    const id = await usersDao.addSoldier(soldierRegistrationDetails)
    return id
}
module.exports = { addSoldier }

