
import './index.css';  
import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import LandingPage from './pages/LandingPage';  
import Footer from './components/Footer';  
import Header from './components/Header';  
import Register from './components/Register';  
import Dashboard from './components/Dashboard';  
import Features from './components/Features';



function App() {  
    return (  
        <BrowserRouter>  
            <div className="App">  
                <Header />  
                <Routes>  
                    <Route path='/' element={<LandingPage />} />  
                    <Route path='/register' element={<Register />} />  
                    <Route path='/dashboard' element={<Dashboard />} /> 
                    <Route path='/features' element={<Features />} />
                    
                </Routes>  
                <Footer />  
            </div>  
           
        </BrowserRouter>  
    );  
}  

export default App;