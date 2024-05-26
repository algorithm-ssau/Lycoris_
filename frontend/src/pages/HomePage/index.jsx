import React, { useEffect, useState } from 'react';
import { Footer, SectionContacts, SectionAdvantages, SectionAU, SectionWelcome } from '../../components/';
import axios from 'axios';



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

