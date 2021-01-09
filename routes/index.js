//Ref:  Routes index.js from edate project

const path = require('path');
const router = require("express").Router();
const healthCheckRoute = require('./health-check');
const email = require('./email-route');

// API Route

router.use('/api/email', email);

router.use('/healthcheck', healthCheckRoute);


module.exports = router;