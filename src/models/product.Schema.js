const mongoose=require('mongoose');

const productSchema= mongoose.Schema({
    name:{type:String, require:true},
    model:{type:String, require:true }, 
    price:{type:String, require:true},
})

const Product = mongoose.model('product',productSchema)
module.exports=Product