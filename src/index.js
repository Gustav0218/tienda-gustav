//Impoprtaciones//
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

app.use(bodyParser.json());
app.use(cors());

const { dbConnection } = require("./config/db");
const Customer = require("./models/customer.Schema");
dbConnection();

app.get("/", (req, res) => {
  res.send("Prueba exitosa");
});



app.listen(process.env.PORT, () => {
  console.log("Se levanta API " + process.env.PORT);
});

// ----->Collections<------//
/*Customers */

app.use("/customers", require("../src/routers/customers.routers"));
//Con app.use se engloban las rutas a un endpoint en especifico.//

/*Shopping */
app.use("/shopping", require("../src/routers/shopping.routers"));

/*Items */
app.use("/products", require("../src/routers/product.routers"));
