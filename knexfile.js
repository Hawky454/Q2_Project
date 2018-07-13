// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tobac-app'
  },

    production: {
      client: 'pg',
      connection: 'postgres://eveqcjmwtbswym:1d05927c3bc53627b8c2559a5a06d7f260944d2ce046bec7359e33581240212c@ec2-54-227-240-7.compute-1.amazonaws.com:5432/des2s0dn4t34vs', //need an address here
    }

  };
