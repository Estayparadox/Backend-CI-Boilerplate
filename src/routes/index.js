var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.status(200).json({ message: 'Tavernier API is running.' });
});

module.exports = router;
