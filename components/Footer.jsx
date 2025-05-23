import { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Modal from './Modal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });

  const openModal = (title, body) => {
    setModalContent({ title, body });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const companyPolicyContent = (
    <div>
      <p>Our company policy ensures transparency, reliability, and professionalism in all marine survey services.</p>
    </div>
  );

  const termsConditionsContent = (
    <div>
      <p>Terms and conditions for Earndeck Shipping services are designed to protect both parties and ensure clear agreements.</p>
    </div>
  );

  return (
    <footer className="bg-[#073859] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around items-start">
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="text-xl font-bold text-center md:text-left">
              LEADING MARINE<br />SURVEYING & CONSULTATION<br />IN SRI LANKA
            </h4>
            <div className="flex justify-center md:justify-start mt-4">
              <Image
                src="/assets/license.webp"
                alt="License"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0 flex flex-col items-center">
            <FaMapMarkerAlt className="text-2xl mb-2" />
            <h4 className="text-lg font-semibold">Address</h4>
            <p className="text-sm text-center">
              No. 5/5 Nagahawatha Road<br />Wathtegedara, Maharagama 10280
            </p>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0 flex flex-col items-center">
            <FaPhoneAlt className="text-2xl mb-2" />
            <h4 className="text-lg font-semibold">Phone</h4>
            <p className="text-sm">+94 77 308 1208</p>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0 flex flex-col items-center">
            <MdEmail className="text-2xl mb-2" />
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-sm">
              <a href="mailto:ops@earndeckshipping.com" className="hover:text-[#76a6d8]">
                ops@earndeckshipping.com
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:earndeckshipping@gmail.com" className="hover:text-[#76a6d8]">
                earndeckshipping@gmail.com
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-center">Follow Us</h4>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-[#76a6d8]" />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-[#76a6d8]" />
              </a>
              <a href="https://www.linkedin.com/company/earndeck-shipping-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-[#76a6d8]" />
              </a>
              <a href="https://www.tiktok.com/@eandeckshipping" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-2xl hover:text-[#76a6d8]" />
              </a>
            </div>
            {/* <div className="flex flex-col items-center mt-4">
              <p
                className="text-sm cursor-pointer hover:text-[#76a6d8]"
                onClick={() => openModal('Company Policy', companyPolicyContent)}
              >
                Company Policy
              </p>
              <p
                className="text-sm cursor-pointer hover:text-[#76a6d8]"
                onClick={() => openModal('Terms & Conditions', termsConditionsContent)}
              >
                Terms & Conditions
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="https://www.linkedin.com/company/sparkhausdigital" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#76a6d8]">
            Sparkhaus
          </a>. All Rights Reserved.
        </p>
      </div>
      <Modal show={isModalOpen} onClose={closeModal} title={modalContent.title}>
        {modalContent.body}
      </Modal>
    </footer>
  );
}