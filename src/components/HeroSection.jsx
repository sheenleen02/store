
import React from 'react';  
import background1 from '../assets/background 1.jpg';  
import background2 from '../assets/background 2.jpg';  
import './HeroSection.css';   
import { Link } from 'react-router-dom';  

const HeroSection = () => {  
    return (  
        <section className="relative flex flex-col items-center justify-center h-screen text-white p-10 text-center overflow-hidden">  
 
            <div className={`bg-slide bg-slide1`} style={{ backgroundImage: `url(${background1})` }}>  
                <div className="overlay"></div> 
                <div className='relative z-10'>   
                    <h2 className="text-5xl font-bold mb-4 mt-[150px] text-blue-700"><span className='text-white'>You can easily sign up</span>  to create your account</h2>   
                    <h1 className="mb-4 text-2xl text-white">and set up your personalized storefront today!</h1>  
                    <Link to="/register" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded">  
                        Sign Up  
                    </Link>  
                    <p className='text-black mt-[10px]'>You already have an account? <span className='text-white'>sign in</span></p>  
                </div>  
            </div>   

           
            <div className={`bg-slide bg-slide2`} style={{ backgroundImage: `url(${background2})` }}>  
                <div className="overlay"></div> 
                <div className='relative z-10'>  
                    <h2 className="text-5xl font-bold mb-4 mt-[150px] text-green-400">Create Your Online Store Today!</h2>  
                    <p className="mb-4 text-2xl text-white">Empower your small business with a personalized storefront that attracts customers.</p>  
                    <Link to="/register" target="_blank" className="bg-white text-green-600 text-bold px-6 py-3 rounded">  
                        Get started   
                    </Link>  
                </div>  
            </div>  
        </section>  
    );  
};  

export default HeroSection;