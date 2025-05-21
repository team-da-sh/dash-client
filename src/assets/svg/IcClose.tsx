import type { SVGProps } from 'react';

const SvgIcClose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="#091120"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.551 5.551 18.45 18.45M18.449 5.551 5.55 18.45"
    />
  </svg>
);
export default SvgIcClose;
