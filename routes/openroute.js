let env = process.env.NODE_ENV || 'development';
let router = require('express').Router();
let config = require('../knexfile.js')[env];
let knex = require('knex')(config);


router.get('/open', (req, res, next) => {
  console.log("we got to the route");
  knex('open')
    .orderBy('id')
    .then((open) => {
      console.log(open);
      res.send(open);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/open/:id', (req, res, next) => {
  knex('open')
    .where('id', req.params.id)
    .first()
    .then((open) => {
      if (!open) {
        return next();
      }

      res.send(open);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/open', (req, res, next) => {
  knex('open')
    .insert({
      full_name: req.body.full_name,
      weapon: req.body.weapon,
      contact_info: req.body.contact_info,
      age: req.body.age,
      price: req.body.price,
      rating: req.body.rating,
      kills: req.body.kills
    }, '*')
    .then((open) => {
      res.send(open[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/open/:id', (req, res, next) => {
  knex('open')
    .where('id', req.params.id)
    .first()
    .then((assassin) => {
      if (!assassin) {
        return next();
      }

      return knex('open')
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
    .then((open) => {
      res.send(open[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/open/:id', (req, res, next) => {
  let assassin;

  knex('open')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        return next();
      }

      assassin = row;

      return knex('open')
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
