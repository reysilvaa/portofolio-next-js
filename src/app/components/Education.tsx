
// components/Education.tsx
import React, { JSX } from 'react';

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
};

interface EducationProps {
  educationList: EducationItem[];
}

export default function Education({ educationList }: EducationProps): JSX.Element {
  return (
    <section className="mb-24" id="education">
      <h2 className="text-3xl font-bold mb-10 after:content-[''] after:block after:w-20 after:h-1 after:bg-yellow-400 after:mt-4">Education</h2>
      <div className="space-y-10">
        {educationList.map((edu) => (
          <div key={edu.id} className="flex flex-col md:flex-row hover:shadow-lg p-4 transition-shadow rounded-lg">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-yellow-400 font-medium">{edu.institution}</p>
              <p className="text-gray-500">{edu.duration}</p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="text-gray-600">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}