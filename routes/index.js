var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
const { where } = require('sequelize');
var models = initModels(sequelize);

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post("/", async function(rep, res, next) {
  let {user, passwrd} = req.body;
  try {
    const datos = await models.users.findAll({
      where: {
        name: {
          [Op.like]: user
        },
        password: {
          [Op.like]: passwrd
        }
      }
    })
    res.redirect("/users")
  } catch(error){
    res.redirect("/")
  }
});

module.exports = router;
