'use strict';

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/add', (req, res) => {
  res.render('add', {title: 'Create An Account'}); //renders account ejs file
});

router.post('/add', (req, res, next) => {
    knex('cellar')
    .insert({
        //left side is database columns, right side is 'names' in add.ejs file
        image: req.body.imgUrl,
        age: req.body.age,
        brand: req.body.brand,
        price: req.body.price,
        blend: req.body.blend,
        weight: req.body.weight,
        purchased: req.body.date,
        isAvailable: req.body.available,
        source: req.body.source,
        rating: req.body.rating
    }, '*')

    .then(() => {
        res.render('add');
    })

    .catch((err) => {
        next(err);
    });
  });



module.exports = router;
