const {Router}=require('express');
const router = Router ();
const {getShopping,createShopping,editShopping,deleteShopping}=require('../controllers/shopping.controllers')

router.get('/',getShopping);
router.post('/',createShopping);
router.put('/:id',editShopping);
router.delete('/:id',deleteShopping);

module.exports = router;