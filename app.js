require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const compression = require('compression')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/index')
const dbInitializer = require('./mongodb/initializer')

const app = express();
const PORT = 3000

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(compression())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const corsOptions = {
    allowedHeaders: ['Content-Type'],
    preflightContinue: true,
    origin: process.env.ORIGINS
};
app.use(cors(corsOptions));

app.use('/api', router)

dbInitializer.initDatabase()
    .then(() => {
        console.log('Database initialized')
    })

app.use((req, res) => {
    res.status(404)
})

app.listen(PORT)
console.log('Server running on internal port: ' + PORT)

module.exports = app;
