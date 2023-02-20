const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router
    .route('/')
    .get(userController.getCustomer)
    .post(userController.createNewCustomer);
    
router
    .route('/:id')
    .get(userController.getCustomerID)
    .patch(userController.patchCustomerById)
    .delete(userController.deleteCustomerByID);

module.exports = router;
