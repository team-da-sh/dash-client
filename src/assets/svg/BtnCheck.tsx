import type { SVGProps } from 'react';

const SvgBtnCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <rect width={20} height={20} fill="#70F" rx={2} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.286}
      d="m5.625 9.625 3.321 3 5.43-5.25"
    />
  </svg>
);
export default SvgBtnCheck;
