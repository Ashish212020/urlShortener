const express = require("express");
const { connectToMongoDB } = require("./connection");
const app = express();
const urlRoute =require('./routes/url');
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 8001

connectToMongoDB(process.env.MONGO_URL
  
)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.log("Mongo error", err));

  app.use(cors()); 
  app.use(express.json());
  app.use('/url',urlRoute)
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
