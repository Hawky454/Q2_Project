'use strict';

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

// router.get('/open', (req, res) => {
//   console.log('this is the open route, this will display the tobacco in your collection that is currently open.');
//   res.render('open', {title: 'Create An Account'}); //renders account ejs file
// });
router.get('/open', (req, res, next) => {
  console.log("we got to the OPEN route, this brings up the open.html page so that I am able to populate it with items from database. Using main.js");
  knex('open')
    .orderBy('id')
    .then((open) => {
      console.log(open); //sends to the server (CLI)
      res.send(open);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/open', (req, res, next) => {
    knex('open')
    .insert({
        //left side is database columns, right side is 'names' in ejs file
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
        res.render('open');
    })

    .catch((err) => {
        next(err);
    });
  });



module.exports = router;
