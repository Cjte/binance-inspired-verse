
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-crypto-dark">
                <span>Crypto</span>
                <span className="text-crypto">Exchange</span>
              </div>
            </Link>
          </div>

          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/trade" className="nav-link">Trade</Link>
              <div className="relative group">
                <button className="nav-link flex items-center">
                  Markets
                  <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Spot Markets</Link>
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Futures</Link>
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Options</Link>
                  </div>
                </div>
              </div>
              <Link to="/" className="nav-link">Learn</Link>
            </nav>
          )}

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium">Log In</Link>
            <Link to="/register" className="btn-primary">Register</Link>
          </div>

          <button 
            onClick={toggleMenu} 
            className="md:hidden rounded-md p-2 text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Home</Link>
            <Link to="/trade" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Trade</Link>
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Markets</Link>
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Learn</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">?</span>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Guest User</div>
                <div className="text-sm font-medium text-gray-500">Not signed in</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Log In</Link>
              <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium bg-crypto text-crypto-dark hover:bg-opacity-90">Register</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
