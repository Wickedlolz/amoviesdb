import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('It load Footer correct', () => {
    test('Load site credentials', () => {
        const text = '© 2022 AMoviesDB, Inc';

        render(
            <MemoryRouter
                initialEntries={[
                    '/',
                    'https://www.twitter.com/',
                    'https://www.instagram.com/',
                    'https://www.facebook.com/',
                ]}
            >
                <Footer />
            </MemoryRouter>
        );
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});
