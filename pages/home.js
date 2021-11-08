import Header from '../modules/header/header.js';
import Image from 'next/image';

import Cta from '../modules/cta/cta.js';
import Testimonials from '../modules/testimonials/testimonials.js';
import Footer from '../modules/footer';

const Hello = () => {
    return (
        <>
            <Header />

            {/* Call to action (CTA) section */}

            <Cta />

            {/* Testimonials section */}

            <Testimonials />

            {/* Footer section */}

            <Footer />
        </>
    );
};

export default Hello;
