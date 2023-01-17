const {Router} = require ('express');
const router=Router();
const {getProduct,createProduct,editProduct,deleteProduct}=require('../controllers/product.controllers')

router.get('/',getProduct);
router.post('/',createProduct);
router.put('/:id',editProduct);
router.delete('/:id',deleteProduct);

module.exports=router;