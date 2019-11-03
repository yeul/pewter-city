const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');

const keystone = new Keystone({
  name: "Pewter City",
  adapter: new MongooseAdapter()
});

module.exports = {
  keystone
};