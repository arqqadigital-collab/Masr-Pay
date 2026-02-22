import React from 'react';

interface MasrPayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const MasrPayButton = ({ children, variant = 'primary', className = '', ...props }: MasrPayButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2";
  const variants: Record<string, string> = {
    primary: "bg-[#D62828] text-white hover:bg-[#b01e1e] shadow-lg shadow-red-200",
    secondary: "bg-white text-[#1a1a1a] border border-gray-200 hover:border-[#D62828] hover:text-[#D62828]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#D62828]"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default MasrPayButton;
