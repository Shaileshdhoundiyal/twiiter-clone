const mongoose = require('mongoose');
const {URI} = require('./server-config')

async function connect(){
    await mongoose.connect(URI);
}

module.exports = {
    connect
}