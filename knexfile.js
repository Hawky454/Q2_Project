// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tobac-app'
  },

    production: {
      client: 'pg',
      connection: 'process.env.postgresql-metric-77959', //need an address here
    }

  };
