describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Primera prueba', () => {
  it('Abrir Log In', () => {
    cy.visit('http://localhost:8081'); 

  });
});

describe('Segunda prueba', () => {
  it('Encontrar elementos basicos', () => {
    cy.visit('http://localhost:8081'); 

    cy.contains('Email'); 

  });
});

describe('Tercera prueba', () => {
  it('Encontrar elementos basicos', () => {
    cy.visit('http://localhost:8081'); 

    cy.contains('Password'); 


  });
});