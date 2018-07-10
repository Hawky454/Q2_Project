let env = process.env.NODE_ENV || 'development';
let router = require('express').Router();
let config = require('../knexfile.js')[env];
let knex = require('knex')(config);


router.get('/cellar', (req, res, next) => {
  console.log("we got to the route");
  knex('cellar')
    .orderBy('id')
    .then((cellar) => {
      console.log(cellar);
      res.send(cellar);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/cellar/:id', (req, res, next) => {
  knex('cellar')
    .where('id', req.params.id)
    .first()
    .then((cellar) => {
      if (!cellar) {
        return next();
      }

      res.send(cellar);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/cellar', (req, res, next) => {
  knex('cellar')
    .insert({
      full_name: req.body.full_name,
      weapon: req.body.weapon,
      contact_info: req.body.contact_info,
      age: req.body.age,
      price: req.body.price,
      rating: req.body.rating,
      kills: req.body.kills
    }, '*')
    .then((cellar) => {
      res.send(cellar[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/cellar/:id', (req, res, next) => {
  knex('cellar')
    .where('id', req.params.id)
    .first()
    .then((assassin) => {
      if (!assassin) {
        return next();
      }

      return knex('cellar')
        .update({
          full_name: req.body.full_name,
          weapon: req.body.weapon,
          contact_info: req.body.contact_info,
          age: req.body.age,
          price: req.body.price,
          rating: req.body.rating,
          kills: req.body.kills
        }, '*')
        .where('id', req.params.id);
    })
    .then((cellar) => {
      res.send(cellar[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/cellar/:id', (req, res, next) => {
  let assassin;

  knex('cellar')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        return next();
      }

      assassin = row;

      return knex('cellar')
        .del()
        .where('id', req.params.id);
    })
    .then(() => {
      delete assassin.id;
      res.send(assassin);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;
