import React from 'react';
import '../../styles/style.css';
import { Footer, Purchase, PurchaseItemList } from '../../components';

export const PurchasePage = () => {
    return (
        <>
            <main className="purchase_content">
                <Purchase />
                <PurchaseItemList />
            </main>
            <Footer />
        </>

    );
}

