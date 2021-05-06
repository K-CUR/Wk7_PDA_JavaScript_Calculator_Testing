describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display the result of an arithmetical operation', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();    
    cy.get('#operator_equals').click();  
    cy.get('.display').should('contain', '6')
  })

  it('should return negative when subtracting larger number from smaller number', () => {
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-5')
  })

  it('should return decimal if numerator does not equally divide by denominator', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.25')
  })

  it('should return 0 if number is divided by 0', () => {
    cy.get('#number8').click();
    cy.get('#operator_divide').click();    
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0')
  })

  it('should return a very large number when two large numbers are multiplied together', () => {
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();  
    cy.get('#number6').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4800000000')
  })

})

