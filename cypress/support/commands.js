Cypress.Commands.add("login", (username, password, expectedResult) => {
  cy.get("#username").type(username).should("include.value", username);
  cy.get("#password").type(password).should("include.value", password);
  cy.get("#loginButton").click();

  if (expectedResult === "success") {
    cy.url().should("contain", "/dashboard");
  }
  if (expectedResult === "failure") {
    cy.get("#authFailure").should("be.visible");
  }
});
