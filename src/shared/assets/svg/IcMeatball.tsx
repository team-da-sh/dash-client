import type { SVGProps } from 'react';

const SvgIcMeatball = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <rect width={20} height={20} fill="currentColor" rx={9.583} />
    <circle cx={6} cy={10} r={1} fill="#fff" />
    <circle cx={10} cy={10} r={1} fill="#fff" />
    <circle cx={14} cy={10} r={1} fill="#fff" />
  </svg>
);
export default SvgIcMeatball;
