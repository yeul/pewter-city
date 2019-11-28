"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import necessary modules
var keystone_1 = require("@keystonejs/keystone");
var adapter_mongoose_1 = require("@keystonejs/adapter-mongoose");
var app_graphql_1 = require("@keystonejs/app-graphql");
var lists_1 = require("./lists");
// create an instance of Keystone app
var keystone = new keystone_1.Keystone({
    name: "New Project",
    adapter: new adapter_mongoose_1.MongooseAdapter()
});
keystone.createList("Todo", lists_1.ToDoSchema);
keystone.createList("User", lists_1.UserSchema);
module.exports = {
    keystone: keystone,
    apps: [new app_graphql_1.GraphQLApp()]
};
