import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom'; 

const Register = () => {  
    const [formData, setFormData] = useState({  
        businessName: '',  
        contactInfo: '',  
        socialMediaLinks: '',  
        logo: null,  
    });  

    const navigate = useNavigate(); 

    const handleChange = (e) => {  
        const { name, value, files } = e.target;  
        if (name === 'logo') {  
            setFormData({ ...formData, logo: files[0] });  
        } else {  
            setFormData({ ...formData, [name]: value });  
        }  
    };  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        
        navigate('/dashboard', { state: formData });   
    };  

    return (  
        <div className="flex items-center justify-center min-h-screen bg-blue-200">  
            <form onSubmit={handleSubmit} className="p-6 bg-white rounded-md shadow-md max-w-md w-full animate-fadeIn">  
                <h2 className="text-2xl font-bold mb-4">Create Your Store</h2>  
                <div className="mb-4">  
                    <label className="block text-gray-700">Business Name</label>  
                    <input  
                        type="text"  
                        name="businessName"  
                        value={formData.businessName}  
                        onChange={handleChange}  
                        required  
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"  
                    />  
                </div>  
                <div className="mb-4">  
                    <label className="block text-gray-700">Contact Info</label>  
                    <input  
                        type="text"  
                        name="contactInfo"  
                        value={formData.contactInfo}  
                        onChange={handleChange}  
                        required  
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"  
                    />  
                </div>  
                
                <div className="mb-4">  
                    <label className="block text-gray-700">Social Media Links</label>  
                    <input  
                        type="text"  
                        name="socialMediaLinks"  
                        value={formData.socialMediaLinks}  
                        onChange={handleChange}  
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"  
                    />  
                </div>  
                <div className="flex flex-col mb-4">  
                    <label className="block text-gray-700">Upload Logo</label>  
                    <input  
                        type="file"  
                        name="logo"  
                        onChange={handleChange}  
                        required  
                        className="w-full border rounded-md"  
                    />  
                </div>  
                <button  
                    type="submit"  
                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400 transition-colors"  
                >  
                    Create Store  
                </button>  
            </form>  
        </div>  
    );  
};  

export default Register;