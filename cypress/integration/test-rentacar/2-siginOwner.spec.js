import '../../support/commands';

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
    cy.get('#uploadCar').click()
    cy.get('form').within(() => { 
      cy.get('input[name="model"]').type('Toyota Prius 2020')
      cy.get('input[name="price"]').type('80')
      cy.get('#photo1').attachFile('ToyotaPrius2020front.jpg', { subjectType: 'input' })
      cy.get('#photo2').attachFile('ToyotaPrius2020photo1.jpg', { subjectType: 'input' })
      cy.get('#photo3').attachFile('ToyotaPrius2020photo2.jpg', { subjectType: 'input' })
      cy.get('#photo4').attachFile('ToyotaPrius2020photo3.jpg', { subjectType: 'input' }) 
      cy.get('#react-select-2-input').type('Toyota').type('{enter}') 
      cy.get('#react-select-3-input').type('4').type('{enter}') 
      cy.get('#react-select-4-input').type('4 or more').type('{enter}') 
      cy.get('#react-select-5-input').type('Cars').type('{enter}') 
      cy.get('textarea[name="description"]').type('The New Toyota Prius 2020 just for your trip')
      cy.root().submit()
    })
  });
});
