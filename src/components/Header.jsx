import React from 'react';  
import { Link } from 'react-router-dom';

const Header = () => {  
    return (  
        <header className=" flex  justify-between bg-gray-800 text-white p-5"> 
                
            <h1 className="text-3xl font-bold"><Link to="/">Online Store</Link>
            
                </h1>  
            <nav>  
                <ul className="flex space-x-4">  
                    <li><a href="#features">Features</a></li>  
                    <li><a href="#testimonials">Testimonials</a></li>  
                    <li><a href="#contact">Contact</a></li>  
                </ul>  
            </nav>  
            
        </header>  
    );  
};  

export default Header;