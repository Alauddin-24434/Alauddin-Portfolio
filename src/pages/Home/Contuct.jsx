import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DynamicTitle from "../../components/Sidebar/DynamiTitle/DynamicTitle";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Send email using email.js
    emailjs
      .sendForm("service_qfrm1li", "template_b7t4les", formRef.current, "2mr-riIr06MMNN0Lo")
      .then((result) => {
        toast.success("Your message has been sent successfully!");
        formRef.current.reset();
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Oops! Something went wrong. Please try again later.");
      });
  };

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto h-screen flex flex-col gap-y-6 p-4 md:p-0  mt-10">
      <div className=" w-full py-4 rounded-lg pl-2 bg-[#1A1A1A] text-[#E0E0E0]">
        <h2 className="text-3xl font-normal leading-tight text-center  uppercase">
      Get In touch
        </h2>
      </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-white dark:text-slate-400">
                We’d love to hear from you! Fill out the form or contact us directly via the information below.
              </p>
              <ul className="mb-6">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-white">Our Address</h3>
                    <p className="text-white">1230 Maecenas Street, New York, EEUU</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <FaPhone />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-white">Contact</h3>
                    <p className="text-white">Mobile: +1 (123) 456-7890</p>
                    <p className="text-white">Mail: tailnext@gmail.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <FaEnvelope />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-white">Working Hours</h3>
                    <p className="text-white">Monday - Friday: 08:00 - 17:00</p>
                    <p className="text-white">Saturday & Sunday: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12">
              <h2 className="mb-4 text-2xl font-bold text-white">Ready to Get Started?</h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 px-4 shadow-md dark:text-gray-300"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 px-4 shadow-md dark:text-gray-300"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 px-4 shadow-md dark:text-gray-300"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-blue-800 px-6 py-3 text-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
