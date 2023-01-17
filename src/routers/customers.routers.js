const {Router} = require ('express'); //Express es el que nos ayuda a hacer todas las rutas//
const router = Router ();
const {getCostumers, createCustomers, editCustomers,deleteCustomers}=require('../controllers/customer.controllers')

router.get('/' ,getCostumers); //localhost:5000/customers
router.post('/',createCustomers); //localhost:5000/customers
router.put ('/:id', editCustomers); //localhost:5000/customers/{id}
router.delete ('/:id', deleteCustomers);  //localhost:5000/customers/{id}

module.exports = router; //Exportamos. Ya que es un modulo "module.export" y los mandamos como router "=routes"

