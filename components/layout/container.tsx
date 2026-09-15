import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = ""}: Props) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  )
};

export default Container;