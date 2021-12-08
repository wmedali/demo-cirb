describe("new script demo", () => {
  it("demo retry", () => {
    cy.get("#postalCode").type("1000");
    cy.get("#city")
      .should("have.value", "Bruxelles")
      .and("be.visible")
      .and("have.property", "disabled", "true");
  });
});
