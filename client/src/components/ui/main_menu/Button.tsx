import React from "react";

interface ButtonProps {
  text: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ text, to }) => {
  return (
    <div className="relative inline-flex group">
      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <a
        href={to}
        className="relative min-w-37 mb-2 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button"
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
