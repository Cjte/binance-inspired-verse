
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, Search, ArrowUp, ArrowDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for Bitcoin price chart
const chartData = [
  { time: '00:00', price: 64200 },
  { time: '04:00', price: 64500 },
  { time: '08:00', price: 64100 },
  { time: '12:00', price: 65000 },
  { time: '16:00', price: 65400 },
  { time: '20:00', price: 65200 },
  { time: '24:00', price: 65432 },
];

// Mock market pairs
const marketPairs = [
  { name: 'BTC/USDT', price: 65432.10, change: '+2.4%', volume: '12.3B', last: '2m ago', status: 'up' },
  { name: 'ETH/USDT', price: 3521.80, change: '+1.2%', volume: '8.5B', last: '1m ago', status: 'up' },
  { name: 'BNB/USDT', price: 562.50, change: '-0.8%', volume: '2.1B', last: '3m ago', status: 'down' },
  { name: 'SOL/USDT', price: 128.75, change: '+5.6%', volume: '3.4B', last: '2m ago', status: 'up' },
  { name: 'ADA/USDT', price: 0.58, change: '-1.5%', volume: '891.2M', last: '1m ago', status: 'down' },
  { name: 'XRP/USDT', price: 0.52, change: '+0.3%', volume: '1.2B', last: '5m ago', status: 'up' },
  { name: 'DOGE/USDT', price: 0.12, change: '+2.8%', volume: '782.1M', last: '3m ago', status: 'up' },
  { name: 'DOT/USDT', price: 7.23, change: '-2.1%', volume: '432.5M', last: '4m ago', status: 'down' },
];

// Mock order book data
const asks = [
  { price: 65440.50, amount: 1.2345, total: 80782.75 },
  { price: 65445.20, amount: 0.5432, total: 35550.65 },
  { price: 65450.80, amount: 0.3789, total: 24799.51 },
  { price: 65455.30, amount: 0.8901, total: 58260.96 },
  { price: 65460.70, amount: 0.2345, total: 15350.53 },
];

const bids = [
  { price: 65425.60, amount: 0.9876, total: 64614.09 },
  { price: 65420.30, amount: 0.4567, total: 29872.35 },
  { price: 65415.90, amount: 0.7890, total: 51613.14 },
  { price: 65410.20, amount: 0.3456, total: 22605.77 },
  { price: 65405.70, amount: 1.5678, total: 102534.05 },
];

const Trade = () => {
  const [orderType, setOrderType] = useState('limit');
  const [tradeType, setTradeType] = useState('buy');
  const [price, setPrice] = useState('65432.10');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState('0.00');
  const [searchPair, setSearchPair] = useState('');

  useEffect(() => {
    document.title = 'Trade - CryptoExchange';
  }, []);

  // Calculate total when price or amount changes
  useEffect(() => {
    if (price && amount) {
      const calculatedTotal = (parseFloat(price) * parseFloat(amount)).toFixed(2);
      setTotal(calculatedTotal);
    } else {
      setTotal('0.00');
    }
  }, [price, amount]);

  // Filter market pairs based on search
  const filteredPairs = marketPairs.filter(pair => 
    pair.name.toLowerCase().includes(searchPair.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Market Pairs */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden lg:col-span-1">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Market Pairs</h3>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search pairs..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crypto focus:border-transparent"
                  value={searchPair}
                  onChange={(e) => setSearchPair(e.target.value)}
                />
              </div>
            </div>
            <div className="h-[calc(100vh-350px)] overflow-y-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pair</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredPairs.map((pair, index) => (
                    <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {pair.name}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                        ${pair.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className={`px-4 py-3 whitespace-nowrap text-right text-sm font-medium ${
                        pair.status === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {pair.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Chart */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden lg:col-span-2">
            <div className="p-4 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-crypto flex items-center justify-center text-xs font-medium text-crypto-dark">
                    B
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">BTC/USDT</h3>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">$65,432.10</span>
                      <span className="ml-2 text-sm font-medium text-green-600">+2.4%</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700">1H</button>
                  <button className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700">4H</button>
                  <button className="px-3 py-1 bg-crypto rounded-md text-xs font-medium text-crypto-dark">1D</button>
                  <button className="px-3 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700">1W</button>
                </div>
              </div>
            </div>
            <div className="h-[400px] p-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="time" tickLine={false} axisLine={false} />
                  <YAxis 
                    domain={['dataMin - 500', 'dataMax + 500']} 
                    tickLine={false} 
                    axisLine={false}
                    orientation="right"
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
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
          </div>
          
          {/* Order Book */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden lg:col-span-1">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Order Book</h3>
            </div>
            <div className="h-[420px] overflow-y-auto">
              <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500 grid grid-cols-3">
                <div>Price (USDT)</div>
                <div className="text-center">Amount (BTC)</div>
                <div className="text-right">Total (USDT)</div>
              </div>
              
              {/* Asks (Sell Orders) */}
              <div className="space-y-1 p-2">
                {asks.map((ask, index) => (
                  <div key={index} className="grid grid-cols-3 text-xs">
                    <div className="text-red-600">{ask.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                    <div className="text-center">{ask.amount.toFixed(4)}</div>
                    <div className="text-right">{ask.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                    <div className="col-span-3 h-1 mt-1 w-full bg-gray-50 relative">
                      <div className="absolute inset-y-0 right-0 bg-red-100" style={{ width: `${(ask.amount / 2) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Current Price */}
              <div className="px-4 py-3 bg-crypto/10 text-center text-sm font-bold text-crypto-dark">
                $65,432.10
              </div>
              
              {/* Bids (Buy Orders) */}
              <div className="space-y-1 p-2">
                {bids.map((bid, index) => (
                  <div key={index} className="grid grid-cols-3 text-xs">
                    <div className="text-green-600">{bid.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                    <div className="text-center">{bid.amount.toFixed(4)}</div>
                    <div className="text-right">{bid.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                    <div className="col-span-3 h-1 mt-1 w-full bg-gray-50 relative">
                      <div className="absolute inset-y-0 left-0 bg-green-100" style={{ width: `${(bid.amount / 2) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Trade Form */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <div className="flex">
                <button
                  onClick={() => setTradeType('buy')}
                  className={`flex-1 py-2 text-center font-medium rounded-tl-md rounded-tr-md ${
                    tradeType === 'buy' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-transparent text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setTradeType('sell')}
                  className={`flex-1 py-2 text-center font-medium rounded-tl-md rounded-tr-md ${
                    tradeType === 'sell' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-transparent text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  Sell
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex space-x-2 mb-4">
                <button
                  onClick={() => setOrderType('limit')}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    orderType === 'limit' 
                      ? 'bg-crypto text-crypto-dark' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Limit
                </button>
                <button
                  onClick={() => setOrderType('market')}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    orderType === 'market' 
                      ? 'bg-crypto text-crypto-dark' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Market
                </button>
                <button
                  onClick={() => setOrderType('stop')}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    orderType === 'stop' 
                      ? 'bg-crypto text-crypto-dark' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Stop
                </button>
              </div>
              
              <div className="space-y-4">
                {orderType !== 'market' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="block w-full pr-16 py-3 border-gray-300 rounded-md focus:ring-crypto focus:border-crypto"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-gray-500 sm:text-sm">USDT</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="block w-full pr-16 py-3 border-gray-300 rounded-md focus:ring-crypto focus:border-crypto"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-gray-500 sm:text-sm">BTC</span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <button className="text-xs text-crypto">25%</button>
                    <button className="text-xs text-crypto">50%</button>
                    <button className="text-xs text-crypto">75%</button>
                    <button className="text-xs text-crypto">100%</button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total</label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      value={total}
                      readOnly
                      className="block w-full pr-16 py-3 bg-gray-50 border-gray-300 rounded-md"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-gray-500 sm:text-sm">USDT</span>
                    </div>
                  </div>
                </div>
                
                <button
                  className={`w-full py-3 rounded-md font-medium ${
                    tradeType === 'buy' 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {tradeType === 'buy' ? 'Buy BTC' : 'Sell BTC'}
                </button>
              </div>
            </div>
          </div>
          
          {/* Recent Trades */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden lg:col-span-1">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Recent Trades</h3>
            </div>
            <div className="h-[400px] overflow-y-auto">
              <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500 grid grid-cols-3">
                <div>Price (USDT)</div>
                <div className="text-center">Amount (BTC)</div>
                <div className="text-right">Time</div>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-3 text-xs px-4 py-2">
                  <div className="text-green-600">65,432.10</div>
                  <div className="text-center">0.0234</div>
                  <div className="text-right">12:30:45</div>
                </div>
                <div className="grid grid-cols-3 text-xs px-4 py-2">
                  <div className="text-red-600">65,430.50</div>
                  <div className="text-center">0.0567</div>
                  <div className="text-right">12:30:40</div>
                </div>
                <div className="grid grid-cols-3 text-xs px-4 py-2">
                  <div className="text-green-600">65,429.75</div>
                  <div className="text-center">0.0189</div>
                  <div className="text-right">12:30:32</div>
                </div>
                <div className="grid grid-cols-3 text-xs px-4 py-2">
                  <div className="text-green-600">65,428.90</div>
                  <div className="text-center">0.0345</div>
                  <div className="text-right">12:30:20</div>
                </div>
                <div className="grid grid-cols-3 text-xs px-4 py-2">
                  <div className="text-red-600">65,427.25</div>
                  <div className="text-center">0.0122</div>
                  <div className="text-right">12:30:15</div>
                </div>
                <div className="grid grid-cols-3 text-xs px-4 py-2">
                  <div className="text-red-600">65,426.80</div>
                  <div className="text-center">0.0678</div>
                  <div className="text-right">12:30:08</div>
                </div>
                <div className="grid grid-cols-3 text-xs px-4 py-2">
                  <div className="text-green-600">65,425.50</div>
                  <div className="text-center">0.0234</div>
                  <div className="text-right">12:30:01</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Open Orders */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden lg:col-span-1">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Open Orders</h3>
            </div>
            <div className="h-[400px] p-6 flex flex-col items-center justify-center text-center">
              <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">No Open Orders</h4>
              <p className="text-gray-500 mb-4">You don't have any open orders at the moment.</p>
              <button className="text-crypto hover:underline text-sm font-medium">View Order History</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Trade;
