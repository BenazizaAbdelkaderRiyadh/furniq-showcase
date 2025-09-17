
import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import PinterestIcon from './icons/PinterestIcon';
import FacebookIcon from './icons/FacebookIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800/30">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white">Furniq.</h3>
            <p className="mt-4 text-sm text-white/60">Crafted for Comfort, Designed for Life.</p>
            <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white/60 hover:text-white"><InstagramIcon className="w-5 h-5"/></a>
                <a href="#" className="text-white/60 hover:text-white"><PinterestIcon className="w-5 h-5"/></a>
                <a href="#" className="text-white/60 hover:text-white"><FacebookIcon className="w-5 h-5"/></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">Shop</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Products</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Rooms</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">About</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Shipping</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white">Returns</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Furniq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
