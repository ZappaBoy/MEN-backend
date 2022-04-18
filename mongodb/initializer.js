'use strict'

require('dotenv').config()
const user = require('./models/event')

const eventTemplate = {
    id: '',
    type: '',
    data: {
        something: '',
        somethingElse: '',
    }
}

async function initDatabase() {
    console.log('Initializing database...')
}

module.exports = {
    initDatabase
}
