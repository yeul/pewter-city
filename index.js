"use strict";
// import necessary modules
var Keystone = require("@keystonejs/keystone").Keystone;
var MongooseAdapter = require("@keystonejs/adapter-mongoose").MongooseAdapter;
var GraphQLApp = require("@keystonejs/app-graphql").GraphQLApp;
// create an instance of Keystone app
var keystone = new Keystone({
    name: "New Project",
    adapter: new MongooseAdapter()
});
module.exports = {
    keystone: keystone,
    apps: [new GraphQLApp()]
};
