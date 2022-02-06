describe("RentaCar App", () => {
  // eslint-disable-next-line jest/expect-expect
  it("sign-up as Renter", () => {
    cy.visit("http://localhost:3000");
    cy.get(".dropdown-toggle").click();
    cy.get('a[href*="signup"]').click();
    cy.get(".TypeUser").click('right')
    
    cy.get('form').within(() => {
      cy.get('input[name="firstName"]').type('Juan Carlos')
      cy.get('input[name="lastName"]').type('Moreno Banda')
      cy.get('input[name="email"]').type('juan.moreno.banda@gmail.com')
      cy.get('input[name="password"]').type('Renta@Car2022')
      cy.get('input[name="confirmPassword"]').type('Renta@Car2022')
      cy.get('.confirm').click() 
      cy.root().submit()    
    })
  });
});
