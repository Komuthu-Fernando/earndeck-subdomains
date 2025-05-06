import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vgisrpk', 'template_fg786yc', e.target, 'szCkEAWZ0v89zbRC1')
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setFormStatus('An error occurred. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-[#073859] mb-8 text-center">How Can We Help?</h2>
      <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Looking to contact Earndeck Shipping? Submit your inquiry below, and we’ll get back to you soon.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <FaMapMarkerAlt className="text-3xl text-[#073859] mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-[#073859] mb-2">Address</h3>
          <p className="text-gray-600">
            No. 5/5 Nagahawatha Road,<br />
            Wathtegedara,<br />
            Maharagama 10280
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <FaPhone className="text-3xl text-[#073859] mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-[#073859] mb-2">Call Us</h3>
          <p className="text-gray-600 font-bold">+94 77 308 1208</p>
          <p className="text-gray-600 mt-2">
            Mon-Fri, 8:30 AM - 5:15 PM
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
          <FaEnvelope className="text-3xl text-[#073859] mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-[#073859] mb-2">Email Us</h3>
          <p className="text-gray-600">
            <a href="mailto:ops@earndeckshipping.com" className="block text-[#073859] hover:text-[#76a6d8] font-bold">
              ops@earndeckshipping.com
            </a>
            <a href="mailto:earndeckshipping@gmail.com" className="block text-[#073859] hover:text-[#76a6d8] font-bold">
              earndeckshipping@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#073859] mb-6 text-center">Get in Touch</h2>
        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073859]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073859]"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073859]"
              required
            />
          </div>
          <div>
            <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700">
              Inquiry/Message
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073859]"
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#073859] text-white py-3 px-6 rounded-lg hover:bg-[#76a6d8] transition-colors duration-300"
          >
            Submit
          </button>
        </form>
        {formStatus && (
          <p className={`mt-4 text-center ${formStatus.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
            {formStatus}
          </p>
        )}
      </div>
    </section>
  );
}