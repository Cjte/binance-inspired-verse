
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarketOverview from '@/components/MarketOverview';
import TradingView from '@/components/TradingView';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'CryptoExchange - Buy & Sell Cryptocurrencies';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MarketOverview />
        <TradingView />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
