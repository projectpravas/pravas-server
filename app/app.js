const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8888;

const app = express();

app.use(cors());

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
