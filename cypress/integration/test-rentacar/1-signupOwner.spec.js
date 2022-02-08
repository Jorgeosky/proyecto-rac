describe("RentaCar App", () => {
  // eslint-disable-next-line jest/expect-expect
  it("sign-up as Owner", () => {
    cy.visit("https://rentacarapp.netlify.app");
    cy.get(".dropdown-toggle").click();
    cy.get('a[href*="signup"]').click();
    cy.get(".TypeUser").click('left')
    
    cy.get('form').within(() => {
      cy.get('input[name="firstName"]').type('Juan Carlos')
      cy.get('input[name="lastName"]').type('Moreno Banda')
      cy.get('input[name="email"]').type('juan.carlos.moreno.banda@gmail.com')
      cy.get('input[name="password"]').type('Renta@Car2022')
      cy.get('input[name="confirmPassword"]').type('Renta@Car2022')
      cy.get('input[name="checkbox"]').click() 
      cy.root().submit()
    })
    cy.wait(5000)
  });
});


