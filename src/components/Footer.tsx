
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-crypto-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Crypto</span>
              <span className="text-crypto">Exchange</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The world's leading cryptocurrency exchange platform, providing a secure and efficient way to trade digital assets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-crypto transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-crypto transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-crypto transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-crypto transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-crypto transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/trade" className="text-gray-400 hover:text-crypto transition-colors">Exchange</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Academy</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Institutional</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Labs</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Launchpad</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Buy Crypto</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Markets</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Trading Fee</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">API</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Referral Program</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Help Center</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Beginner Guide</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Security</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Status</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-crypto transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2023 CryptoExchange. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/" className="text-gray-400 hover:text-crypto text-sm transition-colors">Privacy Policy</Link>
              <Link to="/" className="text-gray-400 hover:text-crypto text-sm transition-colors">Terms of Service</Link>
              <Link to="/" className="text-gray-400 hover:text-crypto text-sm transition-colors">Cookie Preferences</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-crypto-gray py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-gray-500 text-center">
            Cryptocurrency trading involves significant risk and may not be suitable for all investors. Prices can fluctuate significantly and you could lose your entire investment.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
