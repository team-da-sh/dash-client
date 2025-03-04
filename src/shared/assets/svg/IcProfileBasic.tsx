import type { SVGProps } from 'react';

const SvgIcProfileBasic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 101 101" {...props}>
    <g clipPath="url(#ic_profile_basic_svg__a)">
      <rect width={100} height={100} x={0.524} y={0.5} fill="#E5E7EB" rx={50} />
      <path
        fill="#A7AFBF"
        d="M50.524 60.668a18.488 18.488 0 1 0 0-36.976 18.488 18.488 0 0 0 0 36.976m0 5.279c-11.46 0-37.335 7.078-37.335 21.129l-7 20.564h88.67l-7-20.564c0-14.051-25.876-21.13-37.335-21.13"
      />
    </g>
    <defs>
      <clipPath id="ic_profile_basic_svg__a">
        <rect width={100} height={100} x={0.524} y={0.5} fill="#fff" rx={50} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcProfileBasic;
