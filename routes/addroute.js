'use strict';
/* eslint-env node */
/* eslint-disable no-use-before-define */
let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/add', (req, res) => {
  res.render('add', {title: 'Create An Account'}); //renders account ejs file
});

router.post('/add', (req, res, next) => {
  console.log(true);
    knex('cellar')
    .insert({
        //left side is database columns, right side is 'names' in ejs file
        image: req.body.imgUrl,
        brand: req.body.brand,
        blend: req.body.blend,
        weight: req.body.weight,
        purchased: req.body.date,
        age: req.body.age,

    }, '*')

    .then(() => {
        res.render('add');
    })

    .catch((err) => {
        next(err);
    });
  });



module.exports = router;
