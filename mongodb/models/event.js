'use strict'

const eventModel = require('../connection').models.event

async function createEvent(data) {
    return new Promise((resolve, reject) => {
        console.log('Create event')
        resolve()
    })
}

async function readEvent(username) {
    return new Promise((resolve, reject) => {
        console.log('Read event')
        resolve()
    })
}

async function updateEvent(userData) {
    return new Promise((resolve, reject) => {
        console.log('Update event')
        resolve()
    })
}

async function deleteEvent() {
    return new Promise((resolve, reject) => {
        console.log('Delete event')
        resolve()
    })
}


module.exports = {
    createEvent,
    readEvent,
    updateEvent,
    deleteEvent
}
