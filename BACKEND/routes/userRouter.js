const express = require('express')
const { registerController, loginController, allUserController } = require('../controller/usercontroller')


const router = express.Router()


// regidtreing user 
router.post('/register', registerController)

// login user 
router.post('/login', loginController)

//get all users 
router.get('/all-users', allUserController)

module.exports = router;