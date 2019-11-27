"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keystone_1 = require("@keystonejs/keystone");
var adapter_mongoose_1 = require("@keystonejs/adapter-mongoose");
var app_graphql_1 = require("@keystonejs/app-graphql");
var fields_1 = require("@keystonejs/fields");
var keystone = new keystone_1.Keystone({
    name: "Pewter City",
    adapter: new adapter_mongoose_1.MoogooseAdapter()
});
keystone.createList("Todo", {
    fields: {
        name: { type: fields_1.Text }
    }
});
module.exports = {
    keystone: keystone,
    apps: [new app_graphql_1.GraphQLApp()]
};
