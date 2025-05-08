import type { SVGProps } from 'react';

const IcXBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path stroke="#000000" strokeLinecap="round" strokeWidth={1.5} d="M6 6 18 18M18 6 6 18" />
  </svg>
);

export default IcXBlack;
