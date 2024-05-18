import React from 'react';

import Profile from '../../components/ProfilePage/Profile';
//import { Profile } from '../../components/ProfilePage/Profile';
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
