'use strict'

const EventModel = require('../connection').models.event

async function createEvent(data) {
    return new Promise((resolve, reject) => {
        const newEvent = new EventModel(data);

        newEvent.save(function (error, data) {
                if (error) {
                    reject(error)
                }
                resolve(data);
            }
        );
    })
}

async function readEvent(eventId) {
    return new Promise((resolve, reject) => {
        const filter = {
            'eventId': eventId
        }

        EventModel.findOne(
            filter,
            function (error, data) {
                if (error) {
                    reject(error)
                }
                resolve(data);
            });
    })
}

async function updateEvent(eventId, event) {
    return new Promise((resolve, reject) => {
        const filter = {
            'eventId': eventId
        }

        EventModel.findOneAndUpdate(filter, event,
            function (error, data) {
                if (error) {
                    reject(error)
                }
                resolve(data);
            });
    })
}

async function deleteEvent(eventId) {
    return new Promise((resolve, reject) => {
        const filter = {
            'eventId': eventId
        }

        EventModel.findOneAndDelete(filter,
            function (error, event) {
                if (error) {
                    reject(error)
                }
                resolve(event);
            });
    })
}


module.exports = {
    createEvent,
    readEvent,
    updateEvent,
    deleteEvent
}
