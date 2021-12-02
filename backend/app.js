const express = require('express');
var cors = require('cors')
var MongoClient = require('mongodb').MongoClient;

const client = new MongoClient("mongodb+srv://dbUser:joLpPBVC2Po5vcUK@cluster0.av9zf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const database = client.db("TopName");
const names = database.collection("name");

const app = express()

app.use(cors())

app.listen(8080, () => console.log('Server started'))

app.post('/name/add', async(req, res) => {
  await client.connect();
  let myquery = { name: req.query.name };
  await names.insertOne(myquery)
  await client.close()
});

app.get('/name/get', async (req, res) => {
  await client.connect();
  const list = JSON.stringify(await names.find().toArray())
  await client.close()
  res.send(list)
});

app.delete('/name/delete', async (req, res) => {
  await client.connect();
  let myquery = { name: req.query.name };
  await names.deleteOne(myquery)
  await client.close()
});

app.put('/name/update', async (req, res) => {
  await client.connect();
  let myquery = { name: req.query.nameFrom };
  let newvalues = { $set: {name: req.query.nameTo} };
  await names.updateOne(myquery, newvalues)
  await client.close()
});