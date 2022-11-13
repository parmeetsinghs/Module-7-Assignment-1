const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getLandingPAge);
router.get('/Loans', viewsController.getLoan);
router.get('/login', viewsController.getLoginForm);
router.get('/signIn', viewsController.getSignInForm);


module.exports = router;
