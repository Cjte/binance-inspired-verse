
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUp } from 'lucide-react';

// Mock data for Bitcoin price chart
const data = [
  { name: 'Jan', price: 42000 },
  { name: 'Feb', price: 45000 },
  { name: 'Mar', price: 43000 },
  { name: 'Apr', price: 48000 },
  { name: 'May', price: 51000 },
  { name: 'Jun', price: 57000 },
  { name: 'Jul', price: 56000 },
  { name: 'Aug', price: 59000 },
  { name: 'Sep', price: 63000 },
  { name: 'Oct', price: 61000 },
  { name: 'Nov', price: 64000 },
  { name: 'Dec', price: 67000 },
];

const TradingView = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold text-crypto-dark mb-4 animate-fade-in">Advanced Trading View</h2>
          <p className="text-gray-600 max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Intuitive and powerful trading tools to help you make informed decisions.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-zoom-in">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-crypto flex items-center justify-center text-sm font-medium text-crypto-dark">
                  B
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <h3 className="text-xl font-semibold text-gray-900">Bitcoin</h3>
                    <span className="ml-2 text-sm text-gray-500">BTC/USDT</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-2xl font-bold text-gray-900">$65,432.10</span>
                    <span className="ml-2 flex items-center text-green-600 text-sm font-medium">
                      <ArrowUp className="h-4 w-4 mr-1" />
                      2.4%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                  1H
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                  24H
                </button>
                <button className="px-4 py-2 bg-crypto rounded-md text-sm font-medium text-crypto-dark hover:bg-opacity-90 transition-colors">
                  1W
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                  1M
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                  1Y
                </button>
              </div>
            </div>
          </div>
          
          <div className="h-80 p-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis 
                  tickFormatter={(value) => `$${value.toLocaleString()}`} 
                  domain={['dataMin - 5000', 'dataMax + 3000']} 
                  tickLine={false} 
                  axisLine={false}
                  orientation="right"
                />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Price']}
                  contentStyle={{ borderRadius: '8px', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F0B90B" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#F0B90B" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#F0B90B" 
                  strokeWidth={2} 
                  fill="url(#colorPrice)" 
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#F0B90B' }} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-4 divide-x divide-gray-100 border-t border-gray-100">
            <div className="p-4 text-center">
              <div className="text-sm text-gray-500">24h High</div>
              <div className="text-lg font-semibold text-gray-900">$66,891.45</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-sm text-gray-500">24h Low</div>
              <div className="text-lg font-semibold text-gray-900">$63,750.12</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-sm text-gray-500">24h Volume</div>
              <div className="text-lg font-semibold text-gray-900">$12.3B</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-sm text-gray-500">Market Cap</div>
              <div className="text-lg font-semibold text-gray-900">$1.2T</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingView;
