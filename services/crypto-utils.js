let crypto = require('crypto');

function calculateSHA256(obj) {
    let data = JSON.stringify(obj);
    return crypto.createHash('sha256').update(data).digest('hex')
}

function checkIntegrity(data, hash) {
    data = String(data)
    return calculateSHA256(data) === hash
}

module.exports = {
    calculateSHA256,
    checkIntegrity
}
