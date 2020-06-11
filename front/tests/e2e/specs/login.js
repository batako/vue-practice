// https://docs.cypress.io/api/introduction/api.html

describe('ログインページのテスト', () => {
  it('ログイン成功テスト', () => {
    cy.visit('/')
    cy.title().should('eq', 'ログイン')
    cy.validLogin()
    cy.title().should('eq', 'Home')
    cy.get('.toastrs-wrap .alert.alert-danger').should('not.visible')
  })


  it('ログイン失敗テスト', () => {
    cy.visit('/')
    cy.title().should('eq', 'ログイン')
    cy.invalidLogin()
    cy.title().should('eq', 'ログイン')
    cy.get('.toastrs-wrap .alert.alert-danger').contains('Invalid login credentials. Please try again.')
  })
})
