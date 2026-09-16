import { ReactNode } from "react";

type Props = {
  icon?: string;
  children: ReactNode;
};

const Badge = ({ icon, children }: Props) => {
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-600 text-sm font-medium">
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
