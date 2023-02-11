const Customer = require("./../models/customer.Schema");
const { msgFormatConst, resApi, resApiError } = require("../helpers/helpers");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getCostumers = async (req, res) => {
  const Costumer = await Customer.find({});
  resApi(res, "Data retreived", Costumer);
  msgFormatConst("getCustomers");
};

const createCustomers = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const customerNew = await Customer.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const payload = {
      //Estas lineas de codigo estan demàs, ya que
      user: {
        //  nos interesa solamente que nos haga el cliente
        id: customerNew._id, //con su contraseña encriptada. NO que nos haga login enseguida.
      },
    };
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 360000,
      },
      (error, token) => {
        if (error) throw error;
        msgFormatConst("createCustomers");
        res.json(token);
      }
    );
    // res.json({ msg: "Usuario creado", data: customerNew });
  } catch (error) {
    resApi(res, "Error en la peticiòn", {
      msg: error,
    });
  }
};

const verify = async (req, res) => {
  try {
    // CONFIRMAMOS QUE EL USUARIO EXISTA EN BASE DE DATOS Y RETORNAMOS SUS DATOS, EXCLUYENDO EL PASSWORD
    console.log('*****');
    console.log(req.body.email);
    console.log('.-----');
    
    const customer = await Customer.find({email:req.body.email}).select("-password");

    res.json({ customer });
  } catch (error) {
    // EN CASO DE ERROR DEVOLVEMOS UN MENSAJE CON EL ERROR
    res.status(500).json({
      msg: "Hubo un error",
      error,
    });
  }
};

const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    let findCustomer = await Customer.findOne({
      email: email,
    });

    if (!findCustomer) {
      return res.status(400).json({ msg: "El cliente no esta registrado" });
    }

    const passSucces = await bcryptjs.compare(password, findCustomer.password);
    if (!passSucces) {
      return await res.status(400).json({
        msg: "Password no compatible",
      });
    }
    const payload = {
      user: {
        id: findCustomer.id,
      },
    };

    if (email && passSucces) {
      jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 360000 },

        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    }
  } catch (error) {
    resApiError(
      res,
      "Error en la peticiòn",
      {
        msg: error,
      },
      401
    );
  }
};

const editCustomers = async (req, res) => {
  const updateCustomers = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(updateCustomers);
  msgFormatConst("editCustomers");
};

const deleteCustomers = async (req, res) => {
  const customerDelete = await Customer.findByIdAndDelete(req.params.id);
  res.send("Eliminando customer");
  msgFormatConst("deleteCustomers");
};

module.exports = {
  getCostumers,
  createCustomers,
  loginCustomer,
  editCustomers,
  deleteCustomers,
  verify,
};
