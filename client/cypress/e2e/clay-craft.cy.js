describe('Shopping Workflow on Clay Crafts', () => {
  it('should navigate through the site and perform user actions', () => {
    // Visit the public view page
    cy.visit('https://clay-crafts-shopping-mamta.vercel.app/public-view');

    // Click on the element specified by .py-12:nth-child(3)
    cy.get('.py-12:nth-child(3)').click();

    // Click elements in sequence as specified by nth-child
    cy.get('.cursor-pointer:nth-child(4)').click();
    cy.get('.cursor-pointer:nth-child(5)').click();
    cy.get('.flex > .peer-disabled\\3A cursor-not-allowed:nth-child(6)').click();  // Escaping special characters
    cy.get('.cursor-pointer:nth-child(7)').click();
    cy.get('.cursor-pointer:nth-child(8)').click();
    cy.get('.cursor-pointer:nth-child(9)').click();
    cy.get('.peer-disabled\\3A cursor-not-allowed:nth-child(11)').click();  // Escaping special characters

    // Click on the search bar and type 'glass'
    cy.get('.px-3').click().type('glass');

    // Click on the first result
    cy.get('.peer-disabled\\3A cursor-not-allowed:nth-child(1)').click();  // Escaping special characters

    // Perform sign-in actions
    cy.get('.inline-flex').click();  // Click on the login/sign-in button
    cy.get('#email').click().type('prabhat5172992@gmail.com');  // Enter email
    cy.get('#password').type('2314');  // Enter password

    // Add items to cart by clicking on respective buttons
    cy.get('.rounded-lg:nth-child(1) > .flex > .inline-flex').click();  // Add first item to cart
    cy.get('.rounded-lg:nth-child(2) > .flex > .inline-flex').click();  // Add second item to cart

    // Click on the shopping cart icon
    cy.get('.lucide-shopping-cart').click();

    // Proceed to checkout
    cy.get('.mt-6').click();
    cy.get('.cursor-pointer > .grid').click();  // Select an item in checkout

    // Complete the order
    cy.get('.mt-4 > .inline-flex').click();  // Final checkout button
  });
});
