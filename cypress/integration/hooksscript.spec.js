describe("Hooks Test Suite", () => {
  before(() => {
    cy.log("Je suis dans le Before");
  });

  beforeEach(() => {
    cy.log("Je suis dans le before each");
  });
  it("SC 1 - Hook", () => {
    cy.log("SC1");
  });
  it("SC 2 - Hook", () => {
    cy.log("SC 2");
  });
  it("SC 3 - Hook", () => {
    cy.log("SC 3");
  });

  afterEach(() => {
    cy.log("Je suis dans after Each");
  });

  after(() => {
    cy.log("Je suis dans After ");
  });
});
