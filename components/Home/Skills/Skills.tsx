'use client';

import {
   SiJavascript, 
  SiNextdotjs, 
  SiReact, 
  SiReactquery, 
  SiReduxsaga, 
  SiTailwindcss, 
  SiTypescript 
} from 'react-icons/si';
import Tilt from 'react-parallax-tilt';

const Skills = () => {

  // My Skills
  const skills = [
    {id: 1, name: 'JavaScript', icon: <SiJavascript />},
    {id: 2, name: 'React.Js', icon: <SiReact />},
    {id: 3, name: 'Next.Js', icon: <SiNextdotjs />},
    {id: 4, name: 'Tailwind css', icon: <SiTailwindcss />},
    {id: 5, name: 'TypeScript', icon: <SiTypescript />},
    {id: 6, name: 'React Query', icon: <SiReactquery /> },
    {id: 7, name: 'Redux Toolkit', icon: <SiReduxsaga /> },
  ]
  return (
    <div className='text-white pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>My <span className='text-cyan-200'>Skills </span></h1>
      <div className='flex flex-wrap justify-center gap-6 mt-16'>
        {skills.map((skill, i) => (
          <Tilt key={skill.id} scale={1.5} transitionSpeed={400}>
            <div data-aos='flip-right' data-aos-anchor-placement='top-center' data-aos-delay={i * 100} className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
              <div className='text-5xl mb-4 text-gray-300'>{skill.icon}</div>
              <p className='text-purple-400 mt-1'>{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}
export default Skills;