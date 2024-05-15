const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URI);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});




// const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri = process.env.ATLAS_URI || "";
// console.log({ uri });
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// client
//   .connect()
//   .then(() => {
//     // Send a ping to confirm a successful connection
//     return client.db("admin").command({ ping: 1 });
//   })
//   .then(() => {
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// let db = client.db("employees");

// module.exports = db;
