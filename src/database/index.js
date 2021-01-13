const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://10.11.0.4:27017/noderest', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = mongoose;