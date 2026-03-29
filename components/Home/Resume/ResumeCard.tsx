
import React from 'react'
import { IconType } from 'react-icons';

// Type For My Works
type Props = {
  role: string;
  Icon: IconType;
  description?: string;
  date?: string;
}

const ResumeCard = ({ Icon, role, description, date }: Props) => {
  return (
    <div className='mb-6'>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-6 rounded-md hover:bg-blue-900/30'>
        
        <div className='w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 bg-blue-950 rounded-full flex items-center justify-center'>
          <Icon className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
        </div>

        <div className='flex-1'>
          {date && (
            <p className='text-sm text-gray-400 mb-1'>{date}</p>
          )}

          <h2 className='text-gray-200 text-lg sm:text-xl font-semibold'>
            {role}
          </h2>

          {description && (
            <p className='text-gray-300 text-sm sm:text-base pt-2 leading-relaxed'>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ResumeCard;


