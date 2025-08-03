const express = require("express");
const { connectToMongoDB } = require("./connection");
const app = express();
const urlRoute =require('./routes/url')
require('dotenv').config();
const port = 3000;

connectToMongoDB(process.env.MONGO_URL
  
)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.log("Mongo error", err));

  app.use(express.json());
  app.use('/url',urlRoute)
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
