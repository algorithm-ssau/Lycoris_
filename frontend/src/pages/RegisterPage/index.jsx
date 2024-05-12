import React from 'react';

import { RegisterForm } from '../../components/RegisterPage/RegisterForm';
import { SectionContacts } from '../../components/HomePage/SectionContacts';
import { Footer } from '../../components/HomePage/Footer';


export const RegisterPage = () => {
    return (
        <div>
            <RegisterForm/>
            <SectionContacts/>
            <Footer/>
        </div>
    );
};

// export default LoginPage;
