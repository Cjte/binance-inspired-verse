
import React from 'react';
import { Shield, Zap, Award, Layers } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6 text-crypto" />,
    title: 'Secure Asset Fund',
    description: 'Your funds are protected by our Secure Asset Fund for Users (SAFU), an emergency insurance fund.'
  },
  {
    icon: <Zap className="h-6 w-6 text-crypto" />,
    title: 'Lightning Fast Trades',
    description: 'Execute trades at lightning speed with our industry-leading matching engine capable of 1.4 million transactions per second.'
  },
  {
    icon: <Award className="h-6 w-6 text-crypto" />,
    title: 'Industry Lowest Fees',
    description: 'Enjoy competitive trading fees starting from just 0.1% and even lower with our volume-based tier system.'
  },
  {
    icon: <Layers className="h-6 w-6 text-crypto" />,
    title: '350+ Cryptocurrencies',
    description: 'Trade hundreds of cryptocurrency pairs including Bitcoin, Ethereum, and emerging altcoins on our platform.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold text-crypto-dark mb-4 animate-fade-in">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We provide the best trading experience with industry-leading features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="crypto-card animate-slide-in" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-12 w-12 rounded-full bg-crypto/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-crypto-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
