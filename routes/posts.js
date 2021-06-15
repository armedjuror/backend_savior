const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('we are on home');
});

router.post('/registerStudent',require('./studentSignup'));
router.post('/registerDonor',require('./donorSignup'));

router.get('/studentLogin', require('./studentLogin'));
router.get('/donorLogin', require('./donorLogin'));

module.exports = router;