// Divider.js
import React from 'react';
import { classes, cssProps, numToMs } from './utils/style';

const ProjDivider = ({
  notchWidth = '54px',
  notchHeight = '8px',
  lineHeight = '2px',
  collapsed = false,
  collapseDelay = 1000,
}) => {
  return (
    <div className="relative w-full flex items-center mb-8">
      {/* Line */}
      <div
        className={classes(
          "w-full bg-white transition-all duration-700 ease-in-out transform origin-left",
          {
            "opacity-0 scale-x-0": collapsed,
            "opacity-100 scale-x-100": !collapsed,
          }
        )}
        style={{
          height: lineHeight,
          transitionDelay: `${collapseDelay}ms`,
        }}
      />
      {/* Notch */}
      <div
        className={classes(
          "bg-white absolute transition-all duration-7000 ease-in-out clip-path-[polygon(0 -1px, 0 -1px, 10px 100%, 10px 100%)]",
          {
            "opacity-0": collapsed,
            "opacity-100": !collapsed,
          }
        )}
        style={{
          width: notchWidth,
          height: notchHeight,
          top: lineHeight,
          transitionDelay: `${collapseDelay + 160}ms`,
        }}
      />
    </div>
  );
};

export default ProjDivider;
