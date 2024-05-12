import React from 'react';
import { Footer, PurchaseInfo, PurchaseRegistration } from '../../components';
import '../../styles/style.css';


export const CartPage = () => {
    return (
        <>
            <main className='cart_main'>
                <PurchaseRegistration />
                <PurchaseInfo />
            </main>
            <Footer />
        </>);
}

