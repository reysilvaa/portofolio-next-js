// components/WorkExperience.tsx
import React, { JSX } from 'react';

type ExperienceItem = {
  id: number;
  position: string;
  company: string;
  duration: string;
  description: string[];
};

interface WorkExperienceProps {
  experiences: ExperienceItem[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps): JSX.Element {
  return (
    <section className="mb-24" id="experience">
      <h2 className="text-3xl font-bold mb-10 after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-4">Pengalaman</h2>
      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col md:flex-row hover:shadow-lg p-4 transition-shadow rounded-lg">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
              <p className="text-yellow-400 font-medium">{exp.company}</p>
              <p className="text-gray-500">{exp.duration}</p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

