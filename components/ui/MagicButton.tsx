import React from 'react';

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: 'left' | 'right';
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({ title, icon, position, handleClick, otherClasses }) => {
  

  return (
    <div className = " flex justify-center items-center pt-8">
      <button
        className={`relative z-30 flex h-12 animate-shimmer items-center justify-center rounded-[1rem] border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none md:w-60 gap-2 ${otherClasses}`}
        onClick={handleClick}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </button>
    </div>
  );
};

export default MagicButton;