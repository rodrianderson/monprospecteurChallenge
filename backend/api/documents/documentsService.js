const _ = require('lodash')
const DatabaseDocuments = require('../../config/databaseDocuments')

function getDocuments(req, res) { 
    DatabaseDocuments.main(req.body.address)
    .then(function(result) {           
        res.send(result);
    });       
}

module.exports = { getDocuments }