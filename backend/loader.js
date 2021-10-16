const server = require('./config/server')
require('./config/database')
require('./config/databaseDocuments')
require('./config/routes')(server)