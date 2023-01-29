const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const url = `${process.env.dbURL}`;

mongoose.connect(url);

const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("db connected..");
});

conn.on("disconnected", () => {
  console.log("db disconnected...");
});

conn.on("error", () => {
  console.log("db connection error..");
});
