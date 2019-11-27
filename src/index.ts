// import necessary modules
import { Keystone } from "@keystonejs/keystone";
import { MongooseAdapter } from "@keystonejs/adapter-mongoose";
import { GraphQLApp } from "@keystonejs/app-graphql";

// create an instance of Keystone app
const keystone = new Keystone({
  name: "New Project",
  adapter: new MongooseAdapter()
});

module.exports = {
  keystone,
  apps: [new GraphQLApp()]
};
