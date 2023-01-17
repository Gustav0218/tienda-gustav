const {msgFormatConst}=require('../helpers/helpers');

const getProduct=(req,res)=>{
    res.send('Consultando producto');
    msgFormatConst('getProduct');
}

const createProduct=(req,res)=>{
    res.send('Creando producto');
    msgFormatConst('createProduct');
}

const editProduct=(req,res)=>{

    res.send('Editando producto');
    msgFormatConst('editProduct');

}

const deleteProduct=(req,res)=>{
    res.send('Eliminando producto');
    msgFormatConst('deleteProduct');
}

module.exports ={   
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
}
