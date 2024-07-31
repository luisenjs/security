var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');

var token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: 'foobar'
}, 'secret');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('ticket', { username: res.cookie["username"], token: token, title: 'Token' });
});

module.exports = router;