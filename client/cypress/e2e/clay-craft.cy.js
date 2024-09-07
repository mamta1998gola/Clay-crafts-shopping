describe('E-commerce Website Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/public-view');
  });

  it('should navigate through the website and perform various actions', () => {
    // Click on "Dhup Batti Stand" product
    cy.get('[data-cy="Dhup Batti Stand"]').first().click();
    cy.wait(3000);

    // Close the product modal
    cy.get('.lucide-x').first().click();
    cy.wait(3000);

    // Open the menu
    cy.get('.lucide-menu').first().click();

    // AUth
    cy.wait(3000);
    cy.visit('http://localhost:5173/auth/login');
    cy.wait(3000);

    // Fill in login details
    cy.get('#email').type('prabhat5172992@gmail.com');
    cy.get('#password').type('2314');
    cy.wait(2000);
    cy.get('[data-cy="Sign In"]').click();

    // Add to cart
    cy.get('[data-cy="Agarbatti Stand_add_to_cart"]').click();

    // Click on a specific relative element
    cy.get('.relative').eq(4).click();
  });
});