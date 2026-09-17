import { ReactNode } from "react";

type Props = {
  badge?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
};

const Badge = ({ badge, title, description }: Props) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-600">
          {badge}
        </span>
      )}
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default Badge;
