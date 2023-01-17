const {Router}=require('express');
const router = Router();
const {getShopping,createShopping,editShopping,deleteShopping}=require('../controllers/shopping.controllers')

router.get('/',getShopping);
router.post('/',createShopping);

module.exports = router;