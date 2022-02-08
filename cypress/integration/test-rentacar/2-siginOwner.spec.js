describe("RentaCar App", () => {
  // eslint-disable-next-line jest/expect-expect
  it("sign-up as Owner", () => {
    cy.visit("https://rentacarapp.netlify.app");
    cy.get(".dropdown-toggle").click();
    cy.get('a[href*="signin"]').click();
    cy.get(".TypeUser").click('left')
    
    cy.get('form').within(() => {     
      cy.get('input[name="email"]').type('juan.carlos.moreno.banda@gmail.com')
      cy.get('input[name="password"]').type('Renta@Car2022')
      cy.root().submit()
    })
  });
});
