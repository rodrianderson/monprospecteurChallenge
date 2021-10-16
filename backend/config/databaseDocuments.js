const {MongoClient} = require('mongodb');
async function main(type){

    const uri = "mongodb+srv://dev-test-3:dev-test-3@testdbcluster.koma0.mongodb.net/dev-test-3?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
         
        const result = client.db("dev-test-3").collection("documents").find({"address": { $regex: '.*' + type + '.*i' } }).limit(20);
        const listDocuments = [];
        result.toArray().then(items => {
            items.forEach(items => {                
                listDocuments.push(items)
            });                     
        });
        
        return listDocuments;

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = {main} 