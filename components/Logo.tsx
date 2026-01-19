import React from 'react';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className="flex items-center gap-2 cursor-pointer">
    <div className={className}>
        <img src="/images/SIGNVRSE LOGO COLOR.png" alt="Signvrse Logo" className="w-full h-full object-contain" />
    </div>
  </div>
);
