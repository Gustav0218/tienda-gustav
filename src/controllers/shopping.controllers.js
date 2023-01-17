const {msgFormatConst}=require('../helpers/helpers');

const getShopping=(req,res)=>{
    res.send('Consultando compra');
    msgFormatConst('getShopping');
}

const createShopping=(req,res)=>{
    res.send('Creando compra');
    msgFormatConst('createShopping');
}


module.exports ={
    getShopping,
    createShopping,
    
}