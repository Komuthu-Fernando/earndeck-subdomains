import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Now pointing to internal subdirectory routes
  const services = [
    { name: 'Draft Survey', slug: 'draft' },
    { name: 'Container Survey', slug: 'container' },
    { name: 'Bunker Survey', slug: 'bunker' },
    { name: 'Hire Survey', slug: 'hire' },
    { name: 'Certification', slug: 'certification' },
  ];

  return (
    <nav className="navbar flex justify-between items-center p-4 shadow-md bg-white z-50 relative">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/logo.webp"
            alt="Earndeck Shipping Logo"
            width={60}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`absolute md:static top-full left-0 w-full md:w-auto md:flex gap-6 p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              onClick={closeMenu}
              className="block py-2 px-4 text-white hover:text-[#6ec6e3]"
            >
              {service.name}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://www.earndeckshipping.com"
            onClick={closeMenu}
            className="block py-2 px-4 text-white hover:text-[#6ec6e3]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Main Site
          </a>
        </li>
      </ul>
    </nav>
  );
}
