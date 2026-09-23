import { FiClock } from "react-icons/fi";
import { ContactDetail, ContactStat } from "@/data/contact";

type Props = {
  details: ContactDetail[];
  stats: ContactStat[];
};

const ContactInfo = ({ details, stats }: Props) => {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center gap-2 text-lg font-semibold text-white">
        <FiClock className="text-blue-400" />
        Contact Information
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {details.map((detail) => {
          const Icon = detail.icon;

          return (
            <div key={detail.id} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                <Icon className="text-blue-400" />
              </div>

              <div>
                <p className="text-xs text-gray-500">{detail.title}</p>
                <p className="text-sm font-semibold text-white">
                  {detail.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-6 border-t border-white/10" />
 
      <div className="flex flex-col gap-3">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="rounded-lg text-white border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-cyan-300/30 transition-all duration-300 py-3 text-center text-md font-semibold"
          >
            {stat.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
