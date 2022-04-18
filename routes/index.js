const express = require('express')
const router = express.Router()
const events = require('./event')

router.get('/healthcheck', function (req, res, next) {
    res.send('Backend Server: default API module online')
});

router.use('/event', events)

module.exports = router
