const {msgFormatConst}=require('../helpers/helpers');

const getShopping=(req,res)=>{
    res.send('Consultando compra');
    msgFormatConst('getShopping');
}

const createShopping=(req,res)=>{
    res.send('Creando compra');
    msgFormatConst('createShopping');
}

const editShopping=(req,res)=>{
    res.send('Editando compra');
    msgFormatConst('editShopping');
}

const deleteShopping=(req,res)=>{
    res.send('Eliminando compra');
    msgFormatConst('deleteShopping');
}

module.exports ={
    getShopping,
    createShopping,
    editShopping,
    deleteShopping
}