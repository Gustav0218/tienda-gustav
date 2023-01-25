const {Router}=require('express');
const router = Router();
const {getShopping,createShopping}=require('../controllers/shopping.controllers')

router.get('/',getShopping);
router.post('/',createShopping);

module.exports = router;