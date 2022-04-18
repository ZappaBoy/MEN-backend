'use strict'

function generateRandomString(length) {
    return Math.random().toString(36).substring(2, length + 2)
}

function generateRandomNumber(length) {
    return Math.random().toString().substring(2, length + 2)
}

function isValidEmailAddress(address) {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegexp.test(address)
}

module.exports = {
    generateRandomString,
    generateRandomNumber,
    isValidEmailAddress
}
