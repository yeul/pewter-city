import { Text, Password } from "@keystonejs/fields";

export const UserSchema = {
  fields: {
    username: {
      type: Text,
      isRequired: true
    },
    password: {
      type: Password,
      isRequired: true
    }
  }
};
