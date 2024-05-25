import React, { useEffect, useState } from 'react';
import { Footer, SectionContacts, SectionAdvantages, SectionAU, SectionWelcome } from '../../components/';
import axios from 'axios';



export const HomePage = () => {

    // const [formData, setFormData] = useState({
    //     email: 'admin@a.a',
    //     password: 'admin'
    // });

    // async function need() {
    //     let response = () => {
    //         return new Promise(function (resolve, reject) {
    //             const response = axios.post('http://127.0.0.4:3002/login', formData, {
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             }).catch((e) => {reject(console.log("SOME TROUBLE: ", e))});
    //             resolve(response);
    //         });
    //     };
    //     let responseData = await response();
    //     const { access_token } = responseData.data;
    //     localStorage.setItem('token', access_token);
    //     console.log('JWT token:', access_token);
    // }


    // useEffect(() => {
    //     need();

    // }, []);

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

