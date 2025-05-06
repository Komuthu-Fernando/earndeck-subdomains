import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const subdomains = [
    { name: 'Draft Survey', href: 'http://draft.earndeckshipping.com' },
    { name: 'Container Survey', href: 'http://container.earndeckshipping.com' },
    { name: 'Bunker Survey', href: 'http://bunker.earndeckshipping.com' },
    { name: 'Hire Survey', href: 'http://hire.earndeckshipping.com' },
    { name: 'Certification', href: 'http://certification.earndeckshipping.com' },
  ];

  return (
    <nav className="navbar">
      <div className="flex items-center">
        <Link href="https://www.earndeckshipping.com">
          <Image
            src="/assets/logo.webp"
            alt="Earndeck Shipping Logo"
            width={60}
            height={50}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="menu-toggle md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`menu-items ${isOpen ? 'open' : ''} md:flex`}>
        {subdomains.map((subdomain) => (
          <li key={subdomain.name}>
            <Link href={subdomain.href} onClick={closeMenu} className="flex items-center">
              {subdomain.name}
            </Link>
          </li>
        ))}
        <li>
          <Link href="https://www.earndeckshipping.com" onClick={closeMenu} className="flex items-center">
            Main Site
          </Link>
        </li>
      </ul>
    </nav>
  );
}