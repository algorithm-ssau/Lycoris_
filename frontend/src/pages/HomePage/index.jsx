import React from 'react';
import HeaderNav from '../../components/HomePage/HeaderNav';
import SectionWelcome from '../../components/HomePage/SectionWelcome';
import SectionAU from '../../components/HomePage/SectionAU';
import SectionAdvantages from '../../components/HomePage/SectionAdvantages';
import SectionContacts from '../../components/HomePage/SectionContacts';

export const HomePage = () => {
    return (
        <div>
            <HeaderNav />
            <SectionWelcome/>
            <SectionAU/>
            <SectionAdvantages/>
            <SectionContacts/>

        </div>);
}

export default HomePage;