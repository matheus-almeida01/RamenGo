const express = require('express')
const Controller = require('../controller/controller')
const verifyApiKey = require('../middleware/verifyApiKey').verifyApiKey

const router = express.Router()

// List broths
router.get('/broths', verifyApiKey, Controller.listBroths);
    
// List proteins
router.get('/proteins', verifyApiKey, Controller.listProteins);

// Order
router.post('/order', verifyApiKey, Controller.order);

module.exports = router
