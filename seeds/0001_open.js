
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('open').del()
    .then(function () {
      // Inserts seed entries
      return knex('open').insert([{
        image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-023-0002.jpg',
        brand: 'Murray\'s',
        blend: 'Erinmore Flake',
        weight: '1.76oz',
        purchased: '04-10-18',
        age: '3months',
        price: 9,
        isAvailable: true,
        source: 'SmokingPipes',
        rating: 5
      },
      {
        image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-016-0139.jpg',
        brand: 'Cornell & Diehl',
        blend: 'Billy Budd',
        weight: '8oz',
        purchased: '12-10-17',
        age: '7months',
        price: 30,
        isAvailable: true,
        source: 'SmokingPipes',
        rating: 4.5
      },
      {
        image: 'https://i.pinimg.com/564x/e7/4d/f8/e74df82a3e389da0c307d235251c1f23--belfast-ireland-northern-ireland.jpg',
        brand: 'Murray\'s',
        blend: 'Warrior Plug',
        weight: '1.76oz',
        purchased: '01-26-16',
        age: '2yrs, 6months',
        price: 16,
        isAvailable: true,
        source: 'Mr. Snuff',
        rating: 5
      },
      {
        image: 'http://www.jamesfox.ie/bmz_cache/3/3f38e02797cd764385a9edc2a74bf741.image.550x550.jpg',
        brand: 'Gallaher',
        blend: 'Condor Plug',
        weight: '25grams',
        purchased: '05-15-16',
        age: '2yrs, 2months',
        price: 12,
        isAvailable: true,
        source: 'James Fox of Dublin',
        rating: 5
      },
      {
        image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-293-0044.jpg',
        brand: 'Dan Tobacco',
        blend: 'Salty Dogs Plug',
        weight: '1.76oz',
        purchased: '7-15-17',
        age: '1yr',
        price: 15,
        isAvailable: true,
        source: 'Esterval\'s Pipe House',
        rating: 4
      },
      {
        image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-059-0006.jpg',
        brand: 'Samuel Gawith',
        blend: '1792 Flake',
        weight: '1lbs',
        purchased: '01-15-12',
        age: '6yrs 2months',
        price: 30,
        isAvailable: true,
        source: 'SmokingPipes',
        rating: 5
      },
      {
        image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-744-0002.jpg',
        brand: 'Ogdens',
        blend: 'St. Bruno Ready Rubbed',
        weight: '1.76oz',
        purchased: '05-15-16',
        age: '2yrs, 2months',
        price: 9,
        isAvailable: true,
        source: 'SmokingPipes',
        rating: 5
      },
      {
        image: 'http://s3.amazonaws.com/tobrev/t/revor-plug.gif',
        brand: 'Gawith, Hogarth & Co.',
        blend: 'Revor Plug',
        weight: '1.76oz',
        purchased: '05-15-16',
        age: '2yrs, 2months',
        price: 12,
        isAvailable: false,
        source: 'GQ Tobacconist',
        rating: 5
      },
      {
        image: 'https://c647068.ssl.cf2.rackcdn.com/products/003-059-0068.jpg',
        brand: 'Samuel Gawith',
        blend: 'Kendal Plug',
        weight: '8.8oz',
        purchased: '08-15-17',
        age: '11months',
        isAvailable: true,
        source: 'SmokingPipes',
        rating: 3.5
      },
      {
        image: 'https://www.tecon-gmbh.de/images/HU-tobacco%20UP%20Haddes%20Best%20Irish%20100g.jpg',
        brand: 'HU Tobacco',
        blend: 'Hadde\'s Best Irish',
        weight: '3.5oz',
        purchased: '08-15-17',
        age: '11months',
        isAvailable: true,
        source: 'Esterval\'s Pipe House',
        rating: 4
      }

      ]);
    });
};
