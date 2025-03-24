
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Eye, EyeOff, Check } from 'lucide-react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  useEffect(() => {
    document.title = 'Register - CryptoExchange';
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, password, confirmPassword, agreeTerms });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 py-12 mt-8">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Join the world's leading cryptocurrency exchange
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:border-crypto focus:outline-none focus:ring-crypto sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:border-crypto focus:outline-none focus:ring-crypto sm:text-sm"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">
                    Password must contain at least 8 characters, including uppercase, lowercase letters, numbers, and special characters.
                  </p>
                </div>
              </div>
              
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:border-crypto focus:outline-none focus:ring-crypto sm:text-sm"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-crypto focus:ring-crypto"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <Link to="/" className="font-medium text-crypto hover:text-opacity-90">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/" className="font-medium text-crypto hover:text-opacity-90">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-crypto py-3 px-4 text-sm font-medium text-crypto-dark hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-crypto focus:ring-offset-2"
              >
                Create Account
              </button>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-300 flex-grow"></div>
              <div className="mx-4 text-sm text-gray-500">Or register with</div>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="inline-flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545 10.239v3.821h5.445c-0.643 2.783-2.835 4.133-5.445 4.133-3.312 0-6-2.688-6-6s2.688-6 6-6c1.468 0 2.925 0.549 4.001 1.48l2.905-2.905c-1.931-1.765-4.432-2.784-6.906-2.784-5.937 0-10.728 4.955-10.545 10.929 0.178 5.514 4.711 10 10.275 10 5.971 0 9.918-4.221 9.918-10.143 0-0.887-0.092-1.545-0.213-2.233h-9.708l0.272 0.703z"></path>
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-0.732 0-1.325 0.593-1.325 1.325v21.351c0 0.731 0.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463 0.099 2.795 0.143v3.24l-1.918 0.001c-1.504 0-1.795 0.715-1.795 1.763v2.313h3.587l-0.467 3.622h-3.12v9.293h6.116c0.73 0 1.323-0.593 1.323-1.325v-21.35c0-0.732-0.593-1.325-1.325-1.325z"></path>
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-0.883 0.392-1.832 0.656-2.828 0.775 1.017-0.609 1.798-1.574 2.165-2.724-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-0.205-7.719-2.165-10.148-5.144-1.29 2.213-0.669 5.108 1.523 6.574-0.806-0.026-1.566-0.247-2.229-0.616-0.054 2.281 1.581 4.415 3.949 4.89-0.693 0.188-1.452 0.232-2.224 0.084 0.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 0.962-0.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </button>
            </div>
          </form>
          
          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>{' '}
            <Link to="/login" className="font-medium text-crypto hover:text-opacity-90">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
