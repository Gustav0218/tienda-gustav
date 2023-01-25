require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Coneccion exitosa a BD");
  } catch (e) {
    console.log("Error en la coneccion");
  }
};

module.exports = { dbConnection };
