import React from 'react';
import { Footer, SectionContacts,  SectionAdvantages, SectionAU, SectionWelcome} from '../../components/';



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

