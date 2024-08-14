var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');

var token = token = jwt.sign({ data: 'foobar' }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('ticket', { username: res.cookie["username"], token: token, title: 'Token' });
});

module.exports = router;