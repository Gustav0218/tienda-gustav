const Products= require('./../models/product.Schema');
const {msgFormatConst}=require('../helpers/helpers');

const getProduct=async(req,res)=>{
    const product=await Products.find({});
    res.json(product);
    msgFormatConst('getProduct');
}

const createProduct=async(req,res)=>{
    const productNew=await Products.create(req.body)
    res.json(productNew);
    msgFormatConst('createProduct');
}

const editProduct=async(req,res)=>{
     const updateProduct=await Products.findByIdAndUpdate(req.params.id, req.body,{
        new:true
     })
    res.json(updateProduct);
    msgFormatConst('editProduct');

}

const deleteProduct=async(req,res)=>{
    const productDelete=await Products.findByIdAndDelete(req.params.id)
    res.json(productDelete);
    msgFormatConst('deleteProduct');
}

module.exports ={   
    getProduct,
    createProduct,
    editProduct,
    deleteProduct
}
