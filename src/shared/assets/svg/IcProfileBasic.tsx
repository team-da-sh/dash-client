import type { SVGProps } from 'react';

const SvgIcProfileBasic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 96 96" {...props}>
    <g clipPath="url(#ic_profile_basic_svg__a)">
      <rect width={96} height={96} fill="#E5E7EB" rx={48} />
      <path
        fill="#A7AFBF"
        d="M48 57.762a17.749 17.749 0 1 0 0-35.498 17.749 17.749 0 0 0 0 35.498m0 5.067c-11.001 0-35.841 6.795-35.841 20.284l-6.72 19.742H90.56l-6.72-19.742c0-13.49-24.84-20.284-35.841-20.284"
      />
    </g>
    <defs>
      <clipPath id="ic_profile_basic_svg__a">
        <rect width={96} height={96} fill="#fff" rx={48} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcProfileBasic;
