const mongoose = require("mongooses");

const url =
  "mongodb+srv://kirtikumar:Abcd!1234@pravas.vfjckte.mongodb.net/?retryWrites=true&w=majority";

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
