
import React from 'react';
import UserIcon from './icons/UserIcon';

interface HeaderProps {
  isSticky?: boolean;
  activeSection?: string;
}

const navItems = [
    { href: '#', label: 'Home', id: 'home' },
    { href: '#products', label: 'Products', id: 'products' },
    { href: '#about', label: 'About Us', id: 'about' },
    { href: '#rooms', label: 'Rooms', id: 'rooms' },
    { href: '#contact', label: 'Contact', id: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ isSticky, activeSection }) => {
  const headerClasses = isSticky
    ? 'fixed top-0 left-0 right-0 z-50 p-4 bg-zinc-900/80 backdrop-blur-lg shadow-md animate-slide-down'
    : 'absolute top-0 left-0 right-0 z-10 p-6';
  
  const activeLinkClasses = "px-5 py-2 text-sm text-zinc-900 bg-white rounded-full";
  const inactiveLinkClasses = "px-5 py-2 text-sm text-white/80 hover:text-white transition-colors";

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Furniq.
          </div>
          <nav className="hidden md:flex items-center justify-center p-1.5 bg-white/10 backdrop-blur-sm rounded-full">
            {navItems.map(item => (
                <a 
                    key={item.id}
                    href={item.href === '#' ? undefined : item.href}
                    onClick={(e) => {
                      if (item.href === '#') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (item.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={activeSection === item.id ? activeLinkClasses : inactiveLinkClasses}
                >
                    {item.label}
                </a>
            ))}
          </nav>
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/20 transition-colors">
            <UserIcon className="w-5 h-5 text-white" />
          </div>
        </div>
      </header>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-down { animation: slideDown 0.35s ease-out; }
      `}</style>
    </>
  );
};

export default Header;
