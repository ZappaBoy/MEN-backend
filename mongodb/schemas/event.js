'use strict'

const Mongoose = require('mongoose')

const EventSchema = new Mongoose.Schema({

        id: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        type: {
            type: String,
            required: true,
        },
        data: {
            type: Object,
            required: true,
        }
    },
    {
        timestamps: {
            createdAt: 'insertionTimestamp',
            updatedAt: 'lastModificationTimestamp',
            currentTime: () => Date.now()
        }
    }
)

const eventModel = Mongoose.model('event', EventSchema)

module.exports = eventModel
