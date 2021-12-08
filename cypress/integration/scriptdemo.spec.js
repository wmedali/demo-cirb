const users = require("../fixtures/users");
import { logout } from "../actions/auth";

describe("Authentication Test Suite - IDM", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  users.forEach((user, index) => {
    it(`Scenario N° ${index + 1} - with user ${user.username}`, () => {
      cy.login(user.username, user.password, user.expectedResult);
      logout();
    });
  });
});
