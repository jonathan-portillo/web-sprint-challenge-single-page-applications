// describe("Testing form inputs", () => {
//   beforeEach("localhost", () => {
//     cy.visit("http://localhost:3000");
//   });
// });

describe("Testing from inputs", () => {
  beforeEach("visits pizzaform", () => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("adding text to inputs and submits the form", () => {
    cy.get('[data-cy="name"]')
      .type("Jonathan")
      .should("have.value", "Jonathan");
    cy.get("[data-cy=pizzasize]")
      .select("Medium")
      .should("have.value", "Medium");
    cy.get("[data-cy=pepperoni]").check().should("be.checked");
    cy.get("[data-cy=bacon]").check().should("be.checked");
    cy.get("[data-cy=chicken]").check().should("be.checked");
    cy.get("[data-cy=sausage]").check().should("be.checked");
    cy.get('[data-cy="instructions"]')
      .type("Draw an angry squid")
      .should("have.value", "Draw an angry squid");
    cy.get("[data-cy=submit]").click();
  });
});
