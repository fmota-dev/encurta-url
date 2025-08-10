import React from 'react';
import { Scissors } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
          <Scissors className="w-8 h-8 text-white" />
        </div>
      </div>
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Encurta.Url
      </h1>
      <p className="text-gray-300 text-lg">
        Transforme URLs longas em links curtos e compartilháveis
      </p>
    </div>
  );
};

export default Header;
