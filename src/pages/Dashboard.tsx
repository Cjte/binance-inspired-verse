
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wallet, BarChart3, ArrowUpDown, Clock, Bell, User, LogOut } from 'lucide-react';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard - CryptoExchange';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-16">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center mb-6 p-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Demo User</p>
                <p className="text-xs text-gray-500">ID: 12345678</p>
              </div>
            </div>
            
            <nav>
              <ul className="space-y-1">
                <li>
                  <Link to="/dashboard" className="flex items-center p-3 rounded-lg bg-crypto text-crypto-dark">
                    <BarChart3 className="h-5 w-5 mr-3" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/trade" className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    <ArrowUpDown className="h-5 w-5 mr-3" />
                    Trade
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    <Wallet className="h-5 w-5 mr-3" />
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    <Clock className="h-5 w-5 mr-3" />
                    Order History
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    <Bell className="h-5 w-5 mr-3" />
                    Notifications
                  </Link>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link to="/" className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                  <LogOut className="h-5 w-5 mr-3" />
                  Sign Out
                </Link>
              </div>
            </nav>
          </aside>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome back, Demo User</h1>
              <p className="text-gray-600">Here's a summary of your portfolio and recent activity.</p>
            </div>
            
            {/* Portfolio Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Total Balance</p>
                  <p className="text-2xl font-bold text-gray-900">$12,456.78</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <ArrowUpDown className="h-4 w-4 mr-1" />
                    +5.2% today
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Available Balance</p>
                  <p className="text-2xl font-bold text-gray-900">$5,432.10</p>
                  <p className="text-sm text-gray-500 mt-1">Ready to trade</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Locked Balance</p>
                  <p className="text-2xl font-bold text-gray-900">$7,024.68</p>
                  <p className="text-sm text-gray-500 mt-1">In open orders</p>
                </div>
              </div>
            </div>
            
            {/* Assets */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Your Assets</h2>
                <Link to="/trade" className="text-sm text-crypto hover:underline">
                  Trade Now
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Asset
                      </th>
                      <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Balance
                      </th>
                      <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-4 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        24h Change
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-crypto flex items-center justify-center text-xs font-medium text-crypto-dark">
                            B
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Bitcoin</p>
                            <p className="text-xs text-gray-500">BTC</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                        0.15 BTC
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                        $9,814.81
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-green-600">
                        +2.4%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                            E
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Ethereum</p>
                            <p className="text-xs text-gray-500">ETH</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                        0.75 ETH
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                        $2,641.35
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-green-600">
                        +1.8%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                <Link to="/" className="text-sm text-crypto hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <ArrowUpDown className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Bought Bitcoin</p>
                      <p className="text-xs text-gray-500">Today, 10:45 AM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">+0.05 BTC</p>
                    <p className="text-xs text-gray-500">$3,271.60</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <ArrowUpDown className="h-4 w-4 text-red-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Sold Ethereum</p>
                      <p className="text-xs text-gray-500">Yesterday, 2:30 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">-0.25 ETH</p>
                    <p className="text-xs text-gray-500">$880.45</p>
                  </div>
                </div>
              </div>
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

export default Dashboard;
