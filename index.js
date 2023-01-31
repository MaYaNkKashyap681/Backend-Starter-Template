const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./mongodb/connect.js");

//global Middlewares
app.use(express.json());
app.use(cors());

//custom made routes

app.use('/sample', require('./routes/sampleroute.js'))

function startServer() {
  try {
    const PORT = 3000;
    const link = "mongodb://localhost/BackendTemplate";
    connectDb(link);
    app.listen(PORT, () => {
      console.log("Server is Started at PORT:", PORT);
    });
  } catch (err) {
    console.log(err);
  }
}

startServer();
