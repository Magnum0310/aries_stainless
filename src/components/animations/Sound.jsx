import React from "react";

export default function SvgComponent() {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" mask='url("#a")'>
        <g stroke='url("#b")' strokeLinecap="round" strokeWidth="15">
          <path d="M260 178.38v203.24M280 116.29v327.42M300 155.37v249.26M320 167.85v224.3M340 159.78v240.44M360 247.43v65.14M380 217.04v125.92M400 223.88v112.24M420 146.82v266.36M440 166.25v227.5M460 255.13v49.74M480 119.11v321.78M500 222.41v115.17M520 140.31v279.38M540 240.73v78.54M560 219v122M580 211.47v137.05M600 222.31v115.38M620 135.89v288.22M640 222.31v115.38M660 244.16v71.67M680 254.74v50.52M700 118.7v322.6M720 131.13v297.74M740 119.34v321.32M760 142.31v275.38M780 246.08v67.84M800 201.45v157.1M820 225.81v108.38M840 127.26v305.48M860 162.92v234.16M880 257.35v45.3M900 218.32v123.36M920 134.6v290.79M940 129.22v301.56M960 220.62v118.76M980 251.68v56.64M1000 124v312M1020 195.84v168.32M1040 113.48v333.04M1060 230.01v99.98M1080 220.76v118.48M1100 224.99v110.02M1120 168.78v222.44M1140 213.05v133.9M1160 144.8v270.4M1180 234.65v90.71" />
        </g>
      </g>
      <defs>
        <radialGradient
          id="b"
          cx="1195.2"
          cy="280"
          gradientUnits="userSpaceOnUse"
          r="968.2"
        >
          <stop offset=".29" stopColor="rgba(249, 27, 21, 1)" />
          <stop offset=".7" stopColor="rgba(128, 128, 128, 1)" />
        </radialGradient>
        <mask id="a">
          <path d="M0 0h1440v560H0z" fill="#fff" />
        </mask>
      </defs>
    </svg>
  );
}
