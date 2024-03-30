import React, { FC, SVGProps } from "react";

interface ChevronDownProps extends SVGProps<SVGSVGElement> {
  fill: string;
  size?: number;
  height?: number;
  width?: number;
}

const ChevronDown: FC<ChevronDownProps> = ({ fill, size, height = 24, width = 24, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default ChevronDown;
