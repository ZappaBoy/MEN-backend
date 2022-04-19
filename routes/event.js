const express = require('express')
const router = express.Router()
const EventModel = require('../mongodb/models/event')

router.get('/healthcheck', function (req, res, next) {
    res.send('Backend Server: events API module online')
})

router.post('/create', async function (req, res, next) {
    try {
        const event = req.body
        await EventModel.createEvent(event)
        res.status(200)
    } catch (error) {
        res.status(500)
    } finally {
        res.end()
    }
})

router.get('/read/:id', async function (req, res, next) {
    try {
        const eventId = req.params.id
        const event = await EventModel.readEvent(eventId)
        res.send(event)
        res.status(200)
    } catch (error) {
        res.status(500)
    } finally {
        res.end()
    }
})

router.put('/update/:id', async function (req, res, next) {
    try {
        const event = req.body
        const eventId = req.params.id
        await EventModel.updateEvent(eventId, event)
        res.status(200)
    } catch (error) {
        res.status(500)
    } finally {
        res.end()
    }
})

router.delete('/delete/:id', async function (req, res, next) {
    try {
        const eventId = req.params.id
        await EventModel.deleteEvent(eventId)
        res.status(200)
    } catch (error) {
        res.status(500)
    } finally {
        res.end()
    }
})

module.exports = router
