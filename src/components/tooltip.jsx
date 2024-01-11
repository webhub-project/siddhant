// Tooltip.js
import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isTooltipVisible && (
        <div className="absolute z-10 -mt-8 text-white bg-black py-1 px-2 rounded left-10 tracking-widest">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
