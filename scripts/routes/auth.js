const express=require('express')
const router = express.Router();
const authControllers=require('../controllers/authControllers');
const authenticate=require('../../middleware/authenticate');
const authorize = require('../../middleware/authorize'); 

router.post('/',authControllers.createUser);

router.post('/login',authControllers.loginUser);

router.get('/users',authenticate,authorize('admin'),authControllers.getUser)

module.exports=router;