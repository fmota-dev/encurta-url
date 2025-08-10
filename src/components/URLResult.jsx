import React from 'react';
import { Copy, Check } from 'lucide-react';

const URLResult = ({ urlOriginal, urlEncurtada, copyToClipboard, copied, clearResults }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 animate-in slide-in-from-bottom-5 duration-500">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Resultado</h2>
        <button
          onClick={clearResults}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {/* URL Original */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            URL Original
          </label>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <p className="text-gray-300 break-all text-sm">
              {urlOriginal}
            </p>
          </div>
        </div>

        {/* URL Encurtada */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            URL Encurtada
          </label>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10 group">
            <div className="flex items-center justify-between">
              <p className="text-blue-400 break-all text-sm font-medium flex-1 mr-3">
                {urlEncurtada}
              </p>
              {urlEncurtada !== 'URL encurtada não disponível' && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLResult;
