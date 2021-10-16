const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost:27017/db_auth', { useCreateIndex: true, useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false})


