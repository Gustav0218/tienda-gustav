const Customer = require("./../models/customer.Schema");
const { msgFormatConst } = require("../helpers/helpers");

const getCostumers = async (req, res) => {
  const Costumer = await Customer.find({});
  //res.send ('Consultando usuario');
  res.json(Costumer);
  msgFormatConst("getCustomers");
};

const createCustomers = async(req, res) => {
  const customerNew=await Customer.create(req.body)
  res.json(customerNew);
  msgFormatConst("createCustomers");
};

const editCustomers =async (req, res) => {
  const updateCustomers=await Customer.findByIdAndUpdate(req.params.id, req.body, {
    new:true
  })
  res.json(updateCustomers)
  msgFormatConst("editCustomers");
};

const deleteCustomers = async (req, res) => {
  const customerDelete=await Customer.findByIdAndDelete(req.params.id)
  res.send('Eliminando customer')
  msgFormatConst("deleteCustomers");
};

module.exports = {
  getCostumers,
  createCustomers,
  editCustomers,
  deleteCustomers,
};

