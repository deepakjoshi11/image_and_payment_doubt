const express = require('express');
const router = express.Router();

const locationController = require('../Controllers/Locations');
const restaurantController = require('../Controllers/Restaurants');
const mealtypesController = require('../Controllers/Mealtypes');
const userController = require('../Controllers/Users');
const paymentController = require('../Controllers/Payments');
const menuController = require('../Controllers/Menu');
const orderController = require('../Controllers/Orders');



router.get('/getAllLocations', locationController.getAllLocations);
router.get('/getAllMealtypes', mealtypesController.getAllMealTypes);
router.get('/getAllRestaurantsByLocation/:cityName', restaurantController.getAllRestaurantsByLocation);
router.get('/getRestaurantById/:restId', restaurantController.getRestaurantById);
router.post('/filter', restaurantController.filterRestaurans);
router.get('/getMenuForRestaurant/:restId', menuController.getMenuForRestaurant);
router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.post('/payment', paymentController.payment);
router.post('/paymentCallback', paymentController.paymentCallback);
router.post('/saveOrderDetails',orderController.saveOrderDetails);
router.get('/getOrderDetailsByUser/:userEmail',orderController.getOrderDetailsByUsers);


module.exports = router;