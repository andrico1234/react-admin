import showPageFactory from '../support/ShowPage';

describe('Show Page', () => {
    const ShowPage = showPageFactory('/#/posts/10/show');

    describe('Title', () => {
        it('should show the correct title in the window title', () => {
            ShowPage.navigate();
            cy.title().should('eq', 'Post "Totam vel quasi a odio et nihil"');
        });
    });

    it('should fill the page with data from the fetched record', () => {
        ShowPage.navigate();
        cy.contains('Totam vel quasi a odio et nihil');
    });
});
