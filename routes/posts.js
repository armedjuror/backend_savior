const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
    dest: 'uploads/'
});

router.get('/',(req,res)=>{
    res.send('we are on home');
});

router.post('/registerStudent',require('./studentSignup'));
router.post('/registerDonor',require('./donorSignup'));

router.get('/studentLogin', require('./studentLogin'));
router.get('/donorLogin', require('./donorLogin'));

router.get('/parentDetails',require('./parentProfile'));
router.post('/messageDonor',require('./messageDonor'));
router.get('getChat',require('./chat'));

router.get('/studentDashboard',require('./studentDashboard'));
router.post('/submitMarks',require('./submitMarks'));
router.get('/getMarks',require('./getMarks'));

router.post('/addNews',require('./addNews'));
router.get('/getNews',require('./news'));

router.get('/donorDashboard',require('./donorDashboard'));
router.get('/donorFeed',require('./donorFeed'));
router.get('/adoptedStudents',require('./getAdoptedStudents'));
router.get('/studentProfile',require('./studentProfile'));

//router.post('/payment', require('./payment'));
//router.post('/verification', require('./paymentVerification'));
router.get('/addStudent',require('./addStudent'));

//index.html is temporary, connect with frontend
router.get('/upload', (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

router.post('/upload', upload.single('file_uploaded'), (req,res) => {
    res.redirect('/');
})

module.exports = router;