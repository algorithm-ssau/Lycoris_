import React from 'react';
import { Footer, } from '../../components';
import '../../styles/style.css';
import { ProfileContent } from '../../components/ProfilePage/ProfileContent';


export const ProfilePage = () => {
    return (
        <>
            <main className="profile">
                <ProfileContent />
            </main>
            <Footer />
        </>);
}

