import Link from "next/link";
import { ContactMethod } from "@/data/contact";

type Props = {
  methods: ContactMethod[];
};

const ContactCard = ({ methods }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
      {methods.map((method) => {
        const Icon = method.icon;

        return (
          <Link
            key={method.id}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:-translate-y-2 ${method.hoverBg} ${method.hoverBorder}`}
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl ${method.iconBg}`}
            >
              <Icon className={`text-2xl ${method.iconColor}`} />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              {method.title}
            </h3>

            <p className="mt-1 text-sm font-medium text-gray-300">
              {method.value}
            </p>

            <span className="mt-1 text-xs text-gray-500">
              {method.description}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ContactCard;