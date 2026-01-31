declare module '*.svg?react' {
  import React = require('react');
  export const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

/** vanilla-extract *.css.ts 모듈이 Next.js PagesPageConfig 검사에 걸리지 않도록 default 보강 */
declare module '*.css' {
  import type { ComponentType } from 'react';
  const styles: { default: ComponentType<any>; [key: string]: string | ComponentType<any> };
  export = styles;
}

declare module '*.css.js' {
  import type { ComponentType } from 'react';
  const styles: { default: ComponentType<any>; [key: string]: string | ComponentType<any> };
  export = styles;
}
