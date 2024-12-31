import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import DynamicTitle from '../../components/Sidebar/DynamiTitle/DynamicTitle';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const formRef = useRef(null); // Create a ref for the form element

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        // Check if any of the fields are empty
        if (formData.name === '' || formData.email === '' || formData.message === '') {
            toast.error('Please fill out all fields.');
            return;
        }

        // Send email using email.js
        emailjs.sendForm('service_qfrm1li', 'template_b7t4les', e.target, '2mr-riIr06MMNN0Lo')
            .then((result) => {
                console.log(result);
                console.log(result.text);

                toast.success('Your message has been sent successfully!');
                // Reset the form after successful submission
                formRef.current.reset();
                setFormData({ // Also reset the form data in state
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error(error.text);
                toast.error('Oops! Something went wrong. Please try again later.');
            });
    };

    // Function to handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="p-8 h-screen bg-gray-50">
            <div id="contact" className="container mx-auto ">
                <DynamicTitle title="Contact Us" />
          
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
                        <p className="text-gray-800 mb-3">Feel free to reach out to us with any questions or feedback you may have.</p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">Name</label>
                                <input type="text" id="name" name="name" className="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">Email</label>
                                <input type="email" id="email" name="email" className="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-800 font-semibold mb-1">Message</label>
                                <textarea id="message" name="message" rows="5" className="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" disabled={formData.name === '' || formData.email === '' || formData.message === ''} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
                        </form>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                     
                        <div className="flex items-center mb-3">
                            <FaMapMarkerAlt className="text-gray-800 mr-2" />
                            <p className="text-gray-800">City: Barisal</p>
                        </div>
                        <div className="flex items-center mb-3">
                            <FaMapMarkerAlt className="text-gray-800 mr-2" />
                            <p className="text-gray-800">Country: Bangladesh</p>
                        </div>
                        <div className="flex items-center mb-3">
                            <FaMapMarkerAlt className="text-gray-800 mr-2" />
                            <p className="text-gray-800">Zip: 8200</p>
                        </div>
                        <div className="flex items-center mb-3">
                            <FaPhone className="text-gray-800 mr-2" />
                            <p className="text-gray-800">Phone: +880 1871155040</p>
                        </div>
                        <div className="flex items-center mb-3">
                            <FaEnvelope className="text-gray-800 mr-2" />
                            <p className="text-gray-800">Email: mdalauddin159200@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
