import React from 'react';
import { Link } from 'lucide-react';

const URLShortenerForm = ({ inputValue, setInputValue, handleSubmit, isLoading, error }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border border-white/20">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Cole sua URL aqui
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Link className="h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input
              type="url"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="block w-full pl-10 pr-4 py-4 text-white bg-white/5 border border-white/20 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
              placeholder="https://exemplo.com/sua-url-muito-longa"
              disabled={isLoading}
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Encurtando...</span>
            </div>
          ) : (
            'Encurtar URL'
          )}
        </button>
      </div>
    </div>
  );
};

export default URLShortenerForm;
