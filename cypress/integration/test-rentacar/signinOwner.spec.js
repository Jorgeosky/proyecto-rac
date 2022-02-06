describe("RentaCar App", () => {
  // eslint-disable-next-line jest/expect-expect
  it("sign-in existent user(Owner) and redirect to Owner Profile", () => {
    cy.visit("http://localhost:3000");
    cy.get(".dropdown-toggle").click();
    cy.get('a[href*="signin"]').click();
    cy.get(".TypeUser").click('left')  
    cy.get('form').within(() => {
      cy.get('#email').type('juan.carlos.moreno.banda@gmail.com') 
      cy.get('#password').type('Renta@car2022')
      cy.get('.submit').click()
    }) 
  });
});
