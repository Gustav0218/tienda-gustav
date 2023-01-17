const {msgFormatConst }=require('../helpers/helpers')

const getCostumers=(req,res)=>{
res.send ('Consultando usuario');
msgFormatConst('getCustomers');
}

const createCustomers=(req,res)=>{
    res.send('Creando usuario');
    msgFormatConst('createCustomers');
}

const editCustomers=(req,res)=>{
    req.param.id 
    res.send('Editando usuario');
    msgFormatConst('editCustomers');
}

const deleteCustomers=(req,res)=>{
    req.param.id 
    res.send('Eliminando usuario');
    msgFormatConst('deleteCustomers');
}

module.exports={
 getCostumers,
 createCustomers,
 editCustomers,
 deleteCustomers
}