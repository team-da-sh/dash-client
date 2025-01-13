import { ReactNode } from "react";

interface TabRootProps {
  children: ReactNode;
  className?: string;
}

const TabRoot = ({ children, className}: TabRootProps) => {
  return <div className={className}>{children}</div>;
};

export default TabRoot;
