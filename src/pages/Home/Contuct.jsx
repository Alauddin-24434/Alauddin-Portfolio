import {  useRef } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquare } from "react-icons/fa";
import { emailPublic, emailService, emailTempalte } from "../../config/apiConfig";
import emailjs from '@emailjs/browser';
const Contact = () => {
  

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Address",
      details: ["1230 Maecenas Street", "New York, USA"],
    },
    {
      icon: <FaPhoneSquare />,
      title: "Contact",
      details: ["+1 (123) 456-7890", "tailnext@gmail.com"],
    },
    {
      icon: <FaEnvelope />,
      title: "Working Hours",
      details: ["Mon - Fri: 08:00 - 17:00", "Sat - Sun: 08:00 - 12:00"],
    },
  ];

  const form = useRef();


  console.log(form.current)
console.log(emailService)
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

  
    // Prepare the data to be sent to the email template
    

    // Send email using EmailJS
    emailjs
      .sendForm(emailService, emailTempalte, form.current, {
        publicKey: emailPublic,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
         
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send the message.");
        }
      );
  };

 

  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold underline text-white uppercase">
            Get in Touch
          </h2>
          
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 text-gray-100">
            {contactDetails?.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700">
                  {item.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-[#1A1A1A] text-[#E0E0E0] p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                 
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                 
                ></textarea>
              </div>
              <button
                type="submit"
                value="send"
                className="w-full py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
