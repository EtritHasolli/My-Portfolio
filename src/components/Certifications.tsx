import { BadgeCheck, Calendar } from 'lucide-react';
import CertPlaceholder1 from '../images/2ndplace.png';
import CertPlaceholder2 from '../images/besttech.png';

const certifications = [
  {
    title: '2nd Place in the University Engagment Program',
    description:
      'I won the 2nd place in the University Engagment Program with my project "Appointly".',
    date: 'February 2025',
    image: CertPlaceholder1,
  },
  {
    title: 'Best technical Implementation Award in UEP',
    description:
      'I won the best technical implementation award in the University Engagment Program with my project "Appointly".',
    date: 'February 2025',
    image: CertPlaceholder2,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#7CCF8A]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 animate-fadeInUp">
          <BadgeCheck className="text-[#7CCF8A] mr-3 hover:text-[#2f6f4f] transition-colors duration-300" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-[#7CCF8A] hover:-translate-y-2 animate-scaleIn h-full flex flex-col"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg group">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{cert.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed flex-1">{cert.description}</p>
              <div className="flex items-center gap-2 text-[#2f6f4f] font-medium mt-auto pt-3 border-t border-gray-100">
                <Calendar size={18} className="text-[#7CCF8A] shrink-0" aria-hidden />
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
