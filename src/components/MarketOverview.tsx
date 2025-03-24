
import React, { useState } from 'react';
import { ArrowUp, ArrowDown, Search } from 'lucide-react';

// Mock data for cryptocurrency prices
const marketData = [
  { id: 'btc', name: 'Bitcoin', ticker: 'BTC', price: 65432.10, change: 2.4, volume: '12.3B', marketCap: '1.2T' },
  { id: 'eth', name: 'Ethereum', ticker: 'ETH', price: 3521.80, change: 1.2, volume: '8.5B', marketCap: '423.7B' },
  { id: 'bnb', name: 'BNB', ticker: 'BNB', price: 562.50, change: -0.8, volume: '2.1B', marketCap: '86.4B' },
  { id: 'sol', name: 'Solana', ticker: 'SOL', price: 128.75, change: 5.6, volume: '3.4B', marketCap: '53.9B' },
  { id: 'ada', name: 'Cardano', ticker: 'ADA', price: 0.58, change: -1.5, volume: '891.2M', marketCap: '20.5B' },
  { id: 'xrp', name: 'XRP', ticker: 'XRP', price: 0.52, change: 0.3, volume: '1.2B', marketCap: '27.8B' },
  { id: 'doge', name: 'Dogecoin', ticker: 'DOGE', price: 0.12, change: 2.8, volume: '782.1M', marketCap: '16.2B' },
  { id: 'dot', name: 'Polkadot', ticker: 'DOT', price: 7.23, change: -2.1, volume: '432.5M', marketCap: '9.4B' },
];

const MarketOverview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredData = marketData.filter(coin => 
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    coin.ticker.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold text-crypto-dark mb-4 animate-fade-in">Market Overview</h2>
          <p className="text-gray-600 max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Real-time prices and trading volume for the top cryptocurrencies on our exchange.
          </p>
        </div>
        
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveTab('all')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'all' ? 'bg-crypto text-crypto-dark' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveTab('gainers')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'gainers' ? 'bg-crypto text-crypto-dark' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Gainers
            </button>
            <button 
              onClick={() => setActiveTab('losers')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'losers' ? 'bg-crypto text-crypto-dark' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Losers
            </button>
          </div>
          
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search cryptocurrencies..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crypto focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-sm">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  24h Change
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  24h Volume
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Market Cap
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.map((coin) => (
                <tr key={coin.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                        {coin.ticker.slice(0, 1)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{coin.name}</div>
                        <div className="text-sm text-gray-500">{coin.ticker}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                    ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      coin.change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {coin.change >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                      {Math.abs(coin.change)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                    ${coin.volume}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                    ${coin.marketCap}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
