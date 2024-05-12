import React from 'react';

import { Profile } from '../../components/Profile';
import { SectionContacts } from '../../components/HomePage/SectionContacts';
import { Footer } from '../../components/HomePage/Footer';


export const ProfilePage = () => {
    return (
        <div>
            <Profile/>
            <SectionContacts/>
            <Footer/>

        </div>
    );
};
