import React from 'react';

export default function VanthropeLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Dark Squircle Tile */}
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        fill="#111113"
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth="1.2"
      />

      {/* Subtle Inner Perimeter Frame for Depth */}
      <rect
        x="2.5"
        y="2.5"
        width="27"
        height="27"
        rx="5.5"
        fill="none"
        stroke="rgba(255, 255, 255, 0.10)"
        strokeWidth="0.5"
      />

      {/* Brand Vector Mark: Inverted 'V' (Sibling to Arslan Rehmani 'A') */}
      <g>
        {/* Left Wing (Solid Crisp White) */}
        <path d="M 7.5 9.5 L 12 9.5 L 15.2 16 L 15.2 25.5 Z" fill="#f0f0f2" />

        {/* Right Wing (Balanced Depth Facet) */}
        <path d="M 24.5 9.5 L 20 9.5 L 16.8 16 L 16.8 25.5 Z" fill="rgba(240, 240, 242, 0.48)" />

        {/* Central Precision Core Node */}
        <circle cx="16" cy="20.5" r="1.1" fill="#ffffff" />
      </g>
    </svg>
  );
}
