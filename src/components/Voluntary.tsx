import { Heart } from 'lucide-react';

const voluntaryWork = [
  {
    organization: 'Code for Good',
    role: 'Volunteer Developer',
    period: '2023 - Present',
    description:
      'Building web applications for non-profit organizations to help them achieve their missions and reach more people.',
  },
  {
    organization: 'Tech Education Initiative',
    role: 'Mentor',
    period: '2022 - Present',
    description:
      'Mentoring aspiring developers from underrepresented communities, helping them learn programming and start their tech careers.',
  },
  {
    organization: 'Open Source Contributor',
    role: 'Active Contributor',
    period: '2021 - Present',
    description:
      'Contributing to various open-source projects, fixing bugs, adding features, and helping maintain community libraries.',
  },
];

export function Voluntary() {
  return (
    <section id="voluntary" className="py-20 bg-[#7CCF8A]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 animate-fadeInUp">
          <Heart className="text-[#7CCF8A] mr-3" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Voluntary Work</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {voluntaryWork.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#7CCF8A] transition-all duration-300 hover:-translate-x-2 animate-slideInRight"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">{work.organization}</h3>
                <span className="text-[#7CCF8A] font-medium mt-1 sm:mt-0">{work.period}</span>
              </div>
              <p className="text-lg text-[#2f6f4f] font-medium mb-2">{work.role}</p>
              <p className="text-gray-600 leading-relaxed">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
