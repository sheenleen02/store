import React from 'react';  

const Testimonials = () => {  
    return (  
        <section id="testimonials" className="p-10 bg-white text-center">  
            <h2 className="text-4xl font-bold mb-5">What Our Users Say</h2>  
            <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-10 space-y-5 md:space-y-0">  
                <div className="border rounded p-5 shadow">  
                    <p>"This platform has transformed my business! I can easily manage everything from one place."</p>  
                    <h4 className="font-semibold mt-2">- Jane Doe</h4>  
                </div>  
                <div className="border rounded p-5 shadow">  
                    <p>"The analytics feature helped me understand my customers better and boost sales!"</p>  
                    <h4 className="font-semibold mt-2">- John Smith</h4>  
                </div> 
                    <div>
                        
                    </div> 
            </div>  
        </section>  
    );  
};  

export default Testimonials;