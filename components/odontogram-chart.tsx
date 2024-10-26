"use client";

import { useState } from 'react';

export function OdontogramChart() {
  const [selectedTooth, setSelectedTooth] = useState<number | null>(22);

  const teeth = Array.from({ length: 32 }, (_, i) => i + 1);
  
  const getToothPosition = (index: number) => {
    const radius = 150;
    const angle = (index / 32) * 2 * Math.PI - Math.PI / 2;
    return {
      x: radius * Math.cos(angle) + radius,
      y: radius * Math.sin(angle) + radius,
    };
  };

  return (
    <div className="w-full aspect-square max-w-md mx-auto">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {teeth.map((tooth, i) => {
          const pos = getToothPosition(i);
          const isSelected = tooth === selectedTooth;
          
          return (
            <g key={tooth} transform={`translate(${pos.x}, ${pos.y})`}>
              <path
                d="M-10,-10 L10,-10 L10,10 L-10,10 Z"
                fill={isSelected ? '#3b82f6' : '#fff'}
                stroke="#000"
                strokeWidth="1"
                onClick={() => setSelectedTooth(tooth)}
                className="cursor-pointer hover:fill-blue-200 transition-colors"
              />
              <text
                x="0"
                y="25"
                textAnchor="middle"
                fontSize="8"
                fill={isSelected ? '#3b82f6' : '#666'}
              >
                {tooth}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}