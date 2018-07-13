// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tobac-app'
  },

    production: {
      client: 'pg',
      connection: 'postgres://tsnqvlpyygrron:4cc8d09ad27798c88357d247a4f8101a706f637c12b138cc5d0b096e70e4f9d4@ec2-54-163-236-188.compute-1.amazonaws.com:5432/d18los8ol5uttc', //need an address here
    }

  };
