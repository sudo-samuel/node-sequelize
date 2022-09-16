const express = require('express')
const cors = require('cors')
const database = require('./models/index');
const { sequelize } = require('./models/index');

const app = express();
const PORT = 1020
const CORSPORT = 1021

var corsOptions = {
    origin: `http://localhost:${CORSPORT}`
};

app.use(cors(corsOptions))
app.use(express.json()) // req content-type: application/json
app.use(express.urlencoded({extended: true})) // req content type: application/x-www-form-urlencoded

// origin route

app.get('/', (req, res) => {
    res.json({ message: "Node js sequelize web application"})
})

require('./routes/book.routes')(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// SEQUELIZE AUTENTHICATE
database.sequelize.authenticate().then( ()=> {
    console.log('Connection has been established successfully...');
}).catch((err) => {
    console.error('Unable to connect to database: ', err, '...')
})

// SEQUELIZE SYNC
// FORCE TRUE FOR DEVELOPMENT REASONS
database.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Re-Sync done...')
}).catch((err) => {
    console.error('Unable to create table: ', err,'...')
})

