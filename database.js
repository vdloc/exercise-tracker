const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URI || "";
console.log("URI", uri);

const pingTable = process.env.PING_TABLE || "exercise";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
module.exports = {
  client,
  async connect(onConnect, onError) {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db(pingTable).command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      onConnect();

    } catch (error) {
      onError(error);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
}