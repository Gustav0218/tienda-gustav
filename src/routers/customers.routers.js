const {Router} = require ('express'); //Express es el que nos ayuda a hacer todas las rutas//
const router = Router ();
const {getCostumers, createCustomers, loginCustomer, editCustomers,deleteCustomers}=require('../controllers/customer.controllers')
const auth=require('../middleware/authorization')

router.get('/', auth ,getCostumers); //localhost:5000/customers
router.post('/',createCustomers); //localhost:5000/customers
router.post('/login',loginCustomer);//localhost:5000/customers/login
router.put ('/:id', auth,editCustomers); //localhost:5000/customers/{id}
router.delete ('/:id',auth, deleteCustomers);  //localhost:5000/customers/{id}

module.exports = router; //Exportamos. Ya que es un modulo "module.export" y los mandamos como router "=routes"

