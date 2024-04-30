/* eslint-disable no-unused-vars */
import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        // Get form data
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };

        // Send email using email.js
        emailjs.sendForm('service_qfrm1li', 'template_zib05qe', e.target, '2mr-riIr06MMNN0Lo')
            .then((result) => {
                console.log(result.text);
                alert('Your message has been sent successfully!');
                // Optionally, reset the form after successful submission
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert('Oops! Something went wrong. Please try again later.');
            });
    };

    return (
        <div className=" py-12 h-screen" style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
            <div id="contact" className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
                        <p className="text-gray-700 mb-3">Feel free to reach out to us with any questions or feedback you may have.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">Name</label>
                                <input type="text" id="name" name="name" className="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">Email</label>
                                <input type="email" id="email" name="email" className="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-800 font-semibold mb-1">Message</label>
                                <textarea id="message" name="message" rows="5" className="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
                        </form>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                        <p className="text-gray-700 mb-3">123 Main Street</p>
                        <p className="text-gray-700 mb-3">City, State, Zip</p>
                        <p className="text-gray-700 mb-3">Phone: (123) 456-7890</p>
                        <p className="text-gray-700 mb-3">Email: info@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
