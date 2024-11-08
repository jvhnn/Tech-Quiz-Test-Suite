describe("Tech Quiz E2E Test", () => {
  it("starts the quiz and completes all questions", () => {
    cy.visit("http://127.0.0.1:3001/");

    cy.get("button").contains("Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get(".question", { timeout: 20000 }).should("be.visible");
      cy.get(".loading-spinner", { timeout: 20000 }).should("not.exist");
      cy.get(".answer-button").first().click();
      cy.contains(".question", "Question", { timeout: 20000 }).should(
        "be.visible"
      );
    }
    cy.get(".score").should("contain", "Your score");
    cy.get("button").contains("Take New Quiz").should("be.visible");
  });
});
