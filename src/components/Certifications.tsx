import { BadgeCheck, Calendar, ExternalLink, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import CertPlaceholder1 from '../images/2ndplace.png';
import CertPlaceholder2 from '../images/besttech.png';
import CertPlaceholder3 from '../images/KCDE_Certifikata.png';
import CourseraMarketingCert from '../images/coursera-marketing-cert.jpg';
import CourseraAWYA9J5OJ4J1 from '../images/Coursera-AWYA9J5OJ4J1.jpg';

type Certification = {
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
};

const certifications: Certification[] = [
  {
    title: 'Best technical Implementation Award in UEP',
    description:
      'I won the Best Technical Implementation award in the University Engagment Program with my project "Appointly".',
    date: 'February 2025',
    image: CertPlaceholder2,
  },
  {
    title: '2nd Place in the University Engagment Program',
    description:
      'I won the 2nd place in the University Engagment Program with my project "Appointly".',
    date: 'February 2025',
    image: CertPlaceholder1,
  },
  {
    title: 'Fundamentals of Marketing Strategy',
    description:
      'Completed the Fundamentals of Marketing Strategy course authorized by the University of London and offered through Coursera.',
    date: 'May 2026',
    image: CourseraMarketingCert,
    link: 'https://coursera.org/verify/6MB7UAJ7KNTH',
  },
  {
    title: 'Generative AI: Accelerate your Digital Marketing Career',
    description:
      'Completed the Generative AI: Accelerate your Digital Marketing Career course authorized by IBM and offered through Coursera.',
    date: 'June 2026',
    image: CourseraAWYA9J5OJ4J1,
    link: 'https://coursera.org/verify/AWYA9J5OJ4J1',
  },
  {
    title: 'KCDE Certificate',
    description:
      'KCDE Certification is a certification that I earned by participating in the KCDE training program for Software Testing within the framework of the "Youth-focused Digital Academy" project.',
    date: '1 December 2025 - 22 January 2026',
    image: CertPlaceholder3,
  },
];

export function Certifications() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

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
              <button
                onClick={() => setLightboxImage({ src: cert.image, title: cert.title })}
                className="relative overflow-hidden rounded-lg mb-4 shadow-lg group cursor-zoom-in w-full text-left focus:outline-none focus:ring-2 focus:ring-[#7CCF8A] focus:ring-offset-2"
                aria-label={`View ${cert.title} certificate`}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <ZoomIn className="text-white drop-shadow-lg" size={40} />
                </div>
              </button>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{cert.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed flex-1">{cert.description}</p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2 text-[#2f6f4f] font-medium">
                  <Calendar size={18} className="text-[#7CCF8A] shrink-0" aria-hidden />
                  <span>{cert.date}</span>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#7CCF8A] hover:text-[#2f6f4f] font-medium transition-colors duration-300 text-sm"
                  >
                    <ExternalLink size={15} />
                    Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#7CCF8A] transition-colors duration-200 focus:outline-none"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl object-contain"
            />
            <p className="text-white mt-4 text-lg font-medium text-center">{lightboxImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
