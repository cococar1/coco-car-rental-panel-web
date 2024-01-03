import React from "react";


export const PlusIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element=> (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="34"
    role="presentation"
    viewBox="0 0 24 24"
    width="34"
    {...props}
  >
    <g
      fill={props.color ? props.color : "none"}
      stroke={props.color ? props.color : "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M6 12h12" />
      <path d="M12 18V6" />
    </g>
  </svg>
);


