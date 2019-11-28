"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fields_1 = require("@keystonejs/fields");
exports.ToDoSchema = {
    fields: {
        deadline: {
            type: fields_1.CalendarDay,
            format: "Do MMMM YYYY",
            yearRangeFrom: "2019",
            yearRangeTo: "2029",
            isRequired: false,
            defaultValue: Date.now()
        },
        assignee: {
            type: fields_1.Text,
            isRequired: true
        },
        description: {
            type: fields_1.Text,
            isRequired: true
        },
        isComplete: {
            type: fields_1.Checkbox,
            defaultValue: false
        }
    }
};
