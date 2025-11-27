// components/Card.jsx
import { ArrowRight } from 'lucide-react';

export default function Card({ title, description, buttonText, icon: Icon, onClick }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-primary-blue/10 rounded-lg text-primary-blue">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 text-base">{description}</p>
      </div>
      <button 
        onClick={onClick}
        className="mt-4 w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        <span>{buttonText}</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}