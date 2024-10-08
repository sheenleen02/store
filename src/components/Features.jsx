import React, { useState } from 'react';  

const Features = () => {  
    const [showDetails, setShowDetails] = useState(false);  
    
    const handleSecurePaymentsClick = () => {  
        setShowDetails((prev) => !prev); 
    };  

    return (  
        <section id="features" className="p-10 bg-gray-100 text-center">  
            <h2 className="text-4xl font-bold mb-5">Key Features</h2>  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">  
                <div className="p-5 border rounded shadow">  
                    <h3 className="text-2xl font-semibold">User-Friendly Dashboard</h3>  
                    <p>Manage your store effortlessly with our intuitive dashboard.</p>  
                </div>  
                <div  
                    className="p-5 border rounded shadow cursor-pointer" 
                    onClick={handleSecurePaymentsClick} 
                >  
                    <h3 className="text-2xl font-semibold">Secure Payments</h3>  
                    <p>Integrated payment gateways for safe and secure transactions.</p>  
                </div>  
                <div className="p-5 border rounded shadow">  
                    <h3 className="text-2xl font-semibold">Analytics & Reports</h3>  
                    <p>Access detailed analytics to track sales and customer behavior.</p>  
                </div>  
            </div>  
            {showDetails && (  
                <div className="mt-5 p-5 border rounded shadow bg-white">  
                    <h4 className="text-2xl font-semibold">Integrated Payment Gateways</h4>  
                    <p>  
                        Our platform provides seamless integration with various payment gateways that ensure  
                        secure transactions for your customers. Here are some features:  
                    </p>  
                    <ul className="list-disc list-inside">  
                        <li>Support for major credit and debit cards.</li>  
                        <li>Options for digital wallets like PayPal, Stripe, and more.</li>  
                        <li>Fraud detection and prevention tools to keep your transactions safe.</li>  
                        <li></li>
                    </ul>  
                </div>  
            )}  
        </section>  
    );  
};  

export default Features;