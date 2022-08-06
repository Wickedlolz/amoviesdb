import { render, screen } from '@testing-library/react';

import AboutUs from './AboutUs';

describe('It load about description correct', () => {
    test('About Us page first section loads correct', () => {
        const text =
            'AMoviesDB is a place where can find and create most liked and most popular movies which you like.';

        render(<AboutUs />);

        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('About Us second section load correct', () => {
        const text =
            'We accept any new ideas to improve and grow this project. If you have and want to help, can contact us, see section below.';

        render(<AboutUs />);

        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('About Us show email adress correct', () => {
        const email = 'amoviesdb@gmail.com';

        render(<AboutUs />);

        expect(screen.getByText(email)).toBeInTheDocument();
    });

    test('About Us show phone number correct', () => {
        const phoneNumber = '+XXX-XXXX-XXX';

        render(<AboutUs />);

        expect(screen.getByText(phoneNumber)).toBeInTheDocument();
    });
});
