const mongoose = require('mongoose');
const { dbConnection, dbHost, dbPort, dbDatabase } = require('../config/database.js');

mongoose.Promise = global.Promise;

mongoose.connect(`${dbConnection}://${dbHost}:${dbPort}/${dbDatabase}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
});

module.exports = mongoose;