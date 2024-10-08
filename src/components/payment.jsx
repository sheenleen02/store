import React from 'react';  

const PaymentPage = () => {  
    return (  
        <div className="p-6 bg-white rounded-md shadow-md max-w-md w-full">  
            <h2 className="text-2xl font-bold mb-4">Payment Options</h2>  
            <div className="mb-4">  
                <h3 className="text-lg font-semibold">Major Credit and Debit Cards:</h3>  
                <ul className="list-disc ml-6">  
                    <li>Visa</li>  
                    <li>MasterCard</li>  
                    <li>American Express</li>  
                    <li>Discover</li>  
                </ul>  
            </div>  
            <div className="mb-4">  
                <h3 className="text-lg font-semibold">Digital Wallets:</h3>  
                <ul className="list-disc ml-6">  
                    <li>PayPal</li>  
                    <li>Stripe</li>  
                    <li>Apple Pay</li>  
                    <li>Google Pay</li>  
                </ul>  
            </div>  
            <div>  
                <h3 className="text-lg font-semibold">Fraud Detection and Prevention:</h3>  
                <p>  
                    We use advanced algorithms to monitor transactions for suspicious activity.  
                    Our secure checkout process includes encryption and various protective measures.  
                </p>  
            </div>  
        </div>  
    );  
};  

export default PaymentPage;