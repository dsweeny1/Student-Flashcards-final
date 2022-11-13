describe('error handling', () => {
  it('should display an error if the link is wrong', () => {
    cy.visit('http://localhost:3000/students/for')
    cy.get('[data-cy="error-image"]')
    cy.get('h2').contains('Something Went Wrong! Please Go Home!')
  })
  it('should show an error message for a 500 error', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/studens')
    cy.get('[data-cy="error-image"]')
    cy.get('h2').contains('Something Went Wrong! Please Go Home!')
  })
})