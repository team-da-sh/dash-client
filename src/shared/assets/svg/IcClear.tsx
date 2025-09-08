import type { SVGProps } from 'react';

const SvgIcClear = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <rect width={20} height={20} fill="currentColor" rx={9.583} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="m5.834 10 2.84 2.84 6.172-6.173"
    />
  </svg>
);
export default SvgIcClear;
