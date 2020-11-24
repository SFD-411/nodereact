var express = require('express');
var router = express.Router();

router.get('/', function (req,res) {
	res.json({'content': 'Ello, dang world! yudodis!'})
});

module.exports = router
