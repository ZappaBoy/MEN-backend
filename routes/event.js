const express = require('express')
const router = express.Router()
const event = require('../mongodb/models/event')

router.get('/healthcheck', function (req, res, next) {
    res.send('Backend Server: events API module online')
})

router.post('/create', async function (req, res, next) {
    try {
        const data = req.body
        await event.createEvent(data)
        res.status(200)
    } catch (error) {
        res.status(500)
    } finally {
        res.end()
    }
})

router.get('/read', async function (req, res, next) {
    try {
        const data = req.body
        await event.readEvent(data)
        res.status(200)
    } catch (error) {
        res.status(500)
    } finally {
        res.end()
    }
})

router.put('/update', async function (req, res, next) {
    try {
        const data = req.body
        await event.updateEvent(data)
        res.status(200)
    } catch (error) {
        res.status(500)
    } finally {
        res.end()
    }
})

router.delete('/delete', async function (req, res, next) {
    try {
        const data = req.body
        await event.deleteEvent(data)
        res.status(200)
    } catch (error) {
        res.status(500)
    } finally {
        res.end()
    }
})

module.exports = router
