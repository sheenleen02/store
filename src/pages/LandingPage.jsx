import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import '../index.css';

function LandingPage() {
    return (
        <div>
            <HeroSection />
            <Features />
            <Testimonials />
        </div>
    );
}

export default LandingPage;
