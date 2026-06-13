type Props = {
  children: React.ReactNode;
  className?: string;
};

const Badge = ({ children, className = "" }: Props) => {
  return (
    <span
      className={`px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full ${className}`}
    >
      {children}
    </span>
  );
};
export default Badge;