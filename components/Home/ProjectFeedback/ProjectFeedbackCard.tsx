import React from "react";

type Props = {
  name: string;
  image: string;
  role: string;
  projectName: string;
  feedback: string;
};

const ProjectFeedbackCard = ({ image, name, role, projectName, feedback }: Props) => {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl text-left text-white shadow-lg mx-3 h-full border border-gray-700 flex flex-col justify-between hover:border-cyan-500/50 transition-colors duration-300">
      <div>
        {/* Project Tag */}
        <div className="mb-4 inline-block px-3 py-1 bg-cyan-900/30 text-cyan-200 text-[10px] uppercase tracking-wider font-bold rounded-full border border-cyan-800/50">
          {projectName}
        </div>
        
        {/* Feedback Text */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
          "{feedback}"
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4 border-t border-gray-700 pt-6">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/50"
        />
        <div>
          <h4 className="font-bold text-white text-sm">{name}</h4>
          <p className="text-xs text-cyan-200">{role}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectFeedbackCard;