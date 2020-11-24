var express = require('express');
var router = express.Router();

router.get('/', function (req,res) {
    res.json({'content': 'Yo Dawg, this is /'});
});
router.get('/api/hello', function (req,res) {
    res.json('Hey Homie, you\'ve reached /api/hello');
});


module.exports = router
