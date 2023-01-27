import React from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
  size?: number;
}

export const CarIcon = ({
  width,
  height,
  color = `currentColor`,
  style,
  size,
}: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="#ecff5c"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="16"
      y1="120"
      x2="240"
      y2="120"
      fill="none"
      stroke="#ecff5c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
    <path
      d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184"
      fill="none"
      stroke="#ecff5c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></path>
    <path
      d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184"
      fill="none"
      stroke="#ecff5c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></path>
    <line
      x1="64"
      y1="152"
      x2="80"
      y2="152"
      fill="none"
      stroke="#ecff5c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
    <line
      x1="176"
      y1="152"
      x2="192"
      y2="152"
      fill="none"
      stroke="#ecff5c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></line>
    <path
      d="M224,120,194.1,52.8a8,8,0,0,0-7.3-4.8H69.2a8,8,0,0,0-7.3,4.8L32,120v64H224Z"
      fill="none"
      stroke="#ecff5c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></path>
  </svg>
);
export const BackIcon = ({
  width = 20,
  height = 20,
  color = `currentColor`,
  style,
  size,
}: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    style={style}
    viewBox="0 0 9 16"
  >
    <g
      id="icons/ic-arrow-left-green"
      stroke={color}
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M6.58629142,8.00500036 L0.292640816,1.70685429 C-0.0977440278,1.3161906 -0.0975179782,0.68302566 0.293145712,0.292640816 C0.683809402,-0.0977440278 1.31697434,-0.0975179782 1.70735918,0.293145712 L8.70735918,7.29814571 C9.0975468,7.68861203 9.09754696,8.32138741 8.70735954,8.71185393 L1.71735954,15.7068539 C1.3269749,16.0975178 0.693809962,16.0977442 0.303146073,15.7073595 C-0.0875178163,15.3169749 -0.0877441892,14.68381 0.302640455,14.2931461 L6.58629142,8.00500036 Z"
        id="Shape"
        fill="#6ACCBA"
        fillRule="nonzero"
        transform="translate(4.500000, 8.000000) rotate(-180.000000) translate(-4.500000, -8.000000) "
      />
    </g>
  </svg>
);

export const CheckIcon = ({
  width = 20,
  height = 20,
  color = `currentColor`,
  style,
  size,
}: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    style={style}
    viewBox="0 0 13 12"
  >
    <g
      id="icons/ic-checkmark"
      stroke={color}
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M11.0790746,0.453205061 C11.4112604,-0.0252087095 12.0683812,-0.1437499 12.5467949,0.188435901 C13.0252087,0.520621702 13.1437499,1.17774249 12.8115641,1.65615626 L6.46295282,10.799422 C6.10555226,11.3141501 5.38081274,11.4055151 4.90684534,10.9955944 L0.364740884,7.06725934 C-0.0757879335,6.68625868 -0.124045039,6.02027745 0.256955621,5.57974864 C0.637956281,5.13921982 1.30393751,5.09096271 1.74446633,5.47196337 L5.39942542,8.63303201 L11.0790746,0.453205061 Z"
        id="Shape"
        fill="#6ACCBA"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export const NextIcon = ({
  width = 20,
  height = 20,
  color = `currentColor`,
  style,
  size,
}: IIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    style={style}
    viewBox="0 0 9 16"
  >
    <g id="icons/ic-arrow-right-gray" fill="none" fillRule="evenodd">
      <path
        d="M6.58629142,8.00500036 L0.292640816,1.70685429 C-0.0977440278,1.3161906 -0.0975179782,0.68302566 0.293145712,0.292640816 C0.683809402,-0.0977440278 1.31697434,-0.0975179782 1.70735918,0.293145712 L8.70735918,7.29814571 C9.0975468,7.68861203 9.09754696,8.32138741 8.70735954,8.71185393 L1.71735954,15.7068539 C1.3269749,16.0975178 0.693809962,16.0977442 0.303146073,15.7073595 C-0.0875178163,15.3169749 -0.0877441892,14.68381 0.302640455,14.2931461 L6.58629142,8.00500036 Z"
        id="Shape"
        fill="#7B99A9"
        fillRule="nonzero"
        stroke={color}
        strokeWidth="1"
      />
    </g>
  </svg>
);
