import React from 'react';
import { Footer, SectionContacts, SectionAdvantages, SectionAU, SectionWelcome } from '../../components/';



export const HomePage = () => {
    return (
        <>
            <main>
                <SectionWelcome />
                <SectionAU />
                <SectionAdvantages />
                <SectionContacts />
            </main>
            <Footer />

        </>);
}

