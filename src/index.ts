import { Keystone } from "@keystonejs/keystone";
import { MoogooseAdapter } from "@keystonejs/adapter-mongoose";
import { GraphQLApp } from "@keystonejs/app-graphql";
import { Text } from "@keystonejs/fields";

const keystone = new Keystone({
  name: "Pewter City",
  adapter: new MoogooseAdapter()
});

keystone.createList("Todo", {
  fields: {
    name: { type: Text }
  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp()]
};
