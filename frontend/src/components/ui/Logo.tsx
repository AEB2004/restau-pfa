import React from 'react';
import { Utensils } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Utensils className="mr-2" size={24} />
      <span className="font-['Playfair_Display'] font-bold text-2xl">L'Élégance</span>
    </div>
  );
};

export default Logo;