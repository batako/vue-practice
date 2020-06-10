// https://docs.cypress.io/api/introduction/api.html

const typeValidValue = () => {
  cy.get('input[type=email]').clear().type('example@example.com')
  cy.get('input[type=password]').clear().type('password')
}

const typeInvalidValue = () => {
  cy.get('input[type=email]').clear().type('invalid@example.com')
  cy.get('input[type=password]').clear().type('invalid')
}

describe('ログインページのテスト', () => {
  it('ログイン成功テスト', () => {
    cy.visit('/')
    cy.title().should('eq', 'ログイン')
    typeValidValue()
    cy.get('input[type=submit]').click()
    cy.title().should('eq', 'Home')
    cy.get('.toastrs-wrap .alert.alert-danger').should('not.visible')
  })


  it('ログイン失敗テスト', () => {
    cy.visit('/')
    cy.title().should('eq', 'ログイン')
    typeInvalidValue()
    cy.get('input[type=submit]').click()
    cy.title().should('eq', 'ログイン')
    cy.get('.toastrs-wrap .alert.alert-danger').contains('Invalid login credentials. Please try again.')
  })
})
