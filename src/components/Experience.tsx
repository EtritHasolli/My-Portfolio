import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'HotelKey',
    logo: 'https://www.hotelkeyapp.com/favicon.ico',
    role: 'Frontend Developer',
    period: '3 January 2026 - Current',
    description: 'I am a frontend developer at HotelKey, responsible for building the frontend of the hotel management system. I am working on their main website and the hotel management system.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 animate-fadeInUp">
          <Briefcase
            className="text-[#7CCF8A] mr-3 hover:text-[#2f6f4f] transition-colors duration-300"
            size={32}
          />
          <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#7CCF8A] transition-all duration-300 hover:-translate-x-2 animate-slideInRight"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div className="flex items-center gap-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-10 h-10 object-contain rounded"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                </div>
                <span className="text-[#7CCF8A] font-medium mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              {exp.role && (
                <p className="text-lg text-[#2f6f4f] font-medium mb-2">{exp.role}</p>
              )}
              {exp.description && (
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
