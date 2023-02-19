const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
require("./v1/db/db");

const port = process.env.PORT || 8888;

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "x-accessToken,x-refreshToken");
  next();
});

app.use(express.static("v1/uploads"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/enquiries", require("./v1/routes/enquiry.routes"));
app.use("/api/v1/users", require("./v1/routes/user.routes"));
app.use("/api/v1/auth", require("./v1/routes/auth.routes"));
app.use("/api/v1/tours", require("./v1/routes/tour.routes"));
app.use("/api/v1/blogs", require("./v1/routes/blog.routes"));
app.use("/api/v1/bookingOrders", require("./v1/routes/bookingOrders.routes"));

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
