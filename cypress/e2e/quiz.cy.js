describe('Tech Quiz E2E Test', () => {
  it('starts the quiz and completes all questions', () => {
    // Visit the app's root URL (adjust as necessary)
    cy.visit('http://127.0.0.1:3001/');

    // Start the quiz by clicking the "Start Quiz" button
    cy.get('button').contains('Start Quiz').click();
    
    // Loop through all questions in the quiz (assuming there are 10)
    for (let i = 0; i < 10; i++) {
      // Wait for the question to be visible, with an increased timeout if necessary
      cy.get('.question', { timeout: 20000 }).should('be.visible');

      // Optional: Wait for loading spinner to disappear, if it exists
      cy.get('.loading-spinner', { timeout: 20000 }).should('not.exist'); 

      // Click the first answer button (for simplicity in this test)
      cy.get('.answer-button').first().click();

      // Optional: Wait for a specific part of text to ensure the next question has loaded
      cy.contains('.question', 'Question', { timeout: 20000 }).should('be.visible');
    }

    // Verify the final score screen
    cy.get('.score').should('contain', 'Your score');
    
    // Confirm "Take New Quiz" button is visible, indicating the quiz ended
    cy.get('button').contains('Take New Quiz').should('be.visible');
  });
});
