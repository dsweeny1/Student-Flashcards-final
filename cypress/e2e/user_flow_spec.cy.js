describe('User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/students', {
      fixture: "students"
    }).as('students')
    cy.visit('http://localhost:3000/')
    cy.wait('@students').then(() => {
      'response.ok'
    })
  })
  it('should display the homepage', () => {
    cy.get('h1').contains('Student Flashcards')
    cy.get('.home-button')
    cy.get('.new-student-form')
    cy.get('div').should('have.class', 'front')
    cy.get(':nth-child(1) > :nth-child(1) > .delete-button')
  })
  it('should be able to show the card details when clicked', () => {
    cy.get('.card').first().click()
    cy.get('.name').contains('Anthony Shellman')
    cy.get('.bands').contains('Rubber')
    cy.get('.food').contains('Pizza')
    cy.get('.pets').contains('None (yet)')
    cy.get('.location').contains('Denver, CO')
    cy.get('.card').first().click()

    cy.get('.card').last().click()
    cy.get('.name').contains('Beth Wilson')
    cy.get('.bands').contains('Country Music')
    cy.get('.food').contains('Thai')
    cy.get('.pets').contains('Jimmy Dog')
    cy.get('.location').contains('Colorado')
    cy.get('.card').last().click()
  })
})