import { Code } from 'lucide-react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 animate-fadeInUp">
          <Code className="text-[#7CCF8A] mr-3 hover:text-[#2f6f4f] transition-colors duration-300" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Languages & Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#7CCF8A]/5 rounded-lg p-6 border border-[#7CCF8A]/20 hover:border-[#7CCF8A] transition-all duration-300 animate-slideInLeft">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium border border-gray-200 hover:border-[#7CCF8A] hover:text-[#7CCF8A] hover:bg-[#7CCF8A]/5 transition-all duration-300 transform hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
