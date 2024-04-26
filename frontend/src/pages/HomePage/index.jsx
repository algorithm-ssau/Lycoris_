import React from 'react';

// import HeaderNav from '../../components/HeaderNav';
import SectionWelcome from '../../components/HomePage/SectionWelcome';
import SectionAU from '../../components/HomePage/SectionAU';
import SectionAdvantages from '../../components/HomePage/SectionAdvantages';
import SectionContacts from '../../components/HomePage/SectionContacts';
import Footer from '../../components/HomePage/Footer';



export const HomePage = () => {
    return (
        <div>
            {/* <HeaderNav /> */}
            <SectionWelcome/>
            <SectionAU/>
            <SectionAdvantages/>
            <SectionContacts/>
            <Footer/>

        </div>);
}

// export default HomePage;