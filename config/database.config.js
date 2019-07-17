
const siteurl=process.env.MONGODB_URL;
const port = process.env.PORT;
module.exports = {
    // url: 'mongodb://localhost:27017/TDL'
    url: 'mongodb+srv://atlasAdmin:RHberSEZna0OrRnG@cluster0-7ophw.mongodb.net/TDL?retryWrites=true&w=majority'
    //url:process.env.MONGODB_URL;
}



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@cluster0-7ophw.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
