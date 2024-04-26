import React from 'react';

import {SectionWelcome } from '../../components/HomePage/SectionWelcome';
import {SectionAU } from '../../components/HomePage/SectionAU';
import {SectionAdvantages } from '../../components/HomePage/SectionAdvantages';
import {SectionContacts } from '../../components/HomePage/SectionContacts';
import { Footer } from '../../components/HomePage/Footer';



export const HomePage = () => {
    return (
        <div>
            <SectionWelcome/>
            <SectionAU/>
            <SectionAdvantages/>
            <SectionContacts/>
            <Footer/>

        </div>);
}

// export default HomePage;