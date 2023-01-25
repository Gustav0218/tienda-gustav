require("dotenv").config();
const express = require("express");
const bodyParser = require ("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const{dbConnection}=require('./config/db')
dbConnection();

app.get("/", (req, res) => {
  res.send("Prueba exitosa");
});

app.listen(process.env.PORT, () => {
  console.log("Se levanta API ");
});

// ----->Collections<------//
/*Customers */

app.use("/customers", require("../src/routers/customers.routers"));
//Con app.use se engloban las rutas a un endpoint en especifico.//

/*Shopping */
app.use("/shopping",require("../src/routers/shopping.routers"));

/*Items */
app.use("/products", require("../src/routers/product.routers"));