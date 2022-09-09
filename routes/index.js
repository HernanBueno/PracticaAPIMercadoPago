const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/Payment.Controller.js')
const PaymentService = require('../services/Payment.Services.js')
const PaymentInstance = new PaymentController(new PaymentService)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/payment', function(req, res, next) {
  PaymentInstance.getPaymentLink(req,res)
});

router.get('/subscription', function(req, res, next) {
  PaymentInstance.getSubscriptionLink(req,res)
});




module.exports = router;
