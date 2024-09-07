
describe('ShoppingHome Component', () => {
    beforeEach(() => {
        // Visit the page containing the ShoppingHome component
        cy.visit('http://localhost:5173/public-view'); // Adjust the URL if needed
    });

    it('should display feature image slider with navigation buttons', () => {
        // Check if the slider images are visible
        cy.get('[data-testid="feature-image-slider"]').should('exist');
        cy.get('[data-testid^="feature-image-"]').should('have.length.greaterThan', 0);

        // Check if navigation buttons are visible
        cy.get('[data-testid="slider-prev-button"]').should('be.visible');
        cy.get('[data-testid="slider-next-button"]').should('be.visible');
    });

    it('should display and navigate category cards', () => {
        cy.get('[data-testid="category-section"]').should('exist');
        cy.get('[data-testid^="category-card-"]').each((card) => {
            cy.wrap(card).should('be.visible');
        });

        // Click on a category card and check navigation
        cy.get('[data-testid="category-card-claybottle"]').click();
        cy.url().should('include', '/listing-page');
        cy.window().then((win) => {
            const filters = win.sessionStorage.getItem('filters');
            expect(filters).to.equal(JSON.stringify({ category: ['claybottle'] }));
        });
    });

    it('should display and navigate brand cards', () => {
        cy.get('[data-testid="brand-section"]').should('exist');
        cy.get('[data-testid^="brand-card-"]').each((card) => {
            cy.wrap(card).should('be.visible');
        });

        // Click on a brand card and check navigation
        cy.get('[data-testid="brand-card-sachii"]').click();
        cy.url().should('include', '/listing-page');
        cy.window().then((win) => {
            const filters = win.sessionStorage.getItem('filters');
            expect(filters).to.equal(JSON.stringify({ brand: ['sachii'] }));
        });
    });
});
