
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-crypto-light/30 to-white z-0"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-crypto/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-crypto/10 text-crypto-dark text-sm font-medium animate-fade-in">
            Trade with confidence on the world's fastest exchange
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-crypto-dark mb-6 max-w-4xl leading-tight animate-slide-in">
            Buy and sell crypto with the world's most <span className="text-crypto">trusted exchange</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl animate-slide-in" style={{ animationDelay: '0.1s' }}>
            Join millions of users trading hundreds of tokens and cryptocurrencies with confidence on the industry's most advanced platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <Link to="/register" className="btn-primary px-8 py-3 text-base">
              Get Started
            </Link>
            <Link to="/trade" className="flex items-center justify-center px-8 py-3 border border-crypto-dark/20 rounded-md text-crypto-dark hover:bg-gray-50 transition-colors">
              Explore Markets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-crypto-dark">$76B+</p>
              <p className="text-gray-500">24h Trading Volume</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-crypto-dark">350+</p>
              <p className="text-gray-500">Cryptocurrencies</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-crypto-dark">120M+</p>
              <p className="text-gray-500">Registered Users</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-crypto-dark">&lt;0.10%</p>
              <p className="text-gray-500">Lowest Transaction Fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
