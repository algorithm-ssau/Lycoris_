import React from 'react';

import { LoginForm } from '../../components/LoginPage/LoginForm';
import { SectionContacts } from '../../components/HomePage/SectionContacts';
import { Footer } from '../../components/HomePage/Footer';


export const LoginPage = () => {
    return (
        <div>
            <LoginForm/>
            <SectionContacts/>
            <Footer/>
        </div>
    );
};

// export default LoginPage;
