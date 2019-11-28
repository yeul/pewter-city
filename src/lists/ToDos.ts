import { Text, Checkbox, CalendarDay } from "@keystonejs/fields";

export const ToDoSchema = {
  fields: {
    deadline: {
      type: CalendarDay,
      format: "Do MMMM YYYY",
      yearRangeFrom: "2019",
      yearRangeTo: "2029",
      isRequired: false,
      defaultValue: Date.now()
    },
    assignee: {
      type: Text,
      isRequired: true
    },
    description: {
      type: Text,
      isRequired: true
    },
    isComplete: {
      type: Checkbox,
      defaultValue: false
    }
  }
};
