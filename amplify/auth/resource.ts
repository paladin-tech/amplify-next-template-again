import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  groups: ["ADMINS", "USERS"],
  userAttributes: {
    familyName: {
      mutable: true,
      required: true,
    },
    givenName: {
      mutable: true,
      required: true,
    },
  },
});
