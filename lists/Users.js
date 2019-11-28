"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fields_1 = require("@keystonejs/fields");
exports.UserSchema = {
    fields: {
        username: {
            type: fields_1.Text,
            isRequired: true
        },
        password: {
            type: fields_1.Password,
            isRequired: true
        }
    }
};
