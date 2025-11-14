import { Heart, ExternalLink } from 'lucide-react';
import work1 from '../images/work1.jpg';
import work2 from '../images/work2.jpg';
import work3 from '../images/work3.jpg';
import work4 from '../images/work4.jpg';

const voluntaryWork = [
  // {
  //   organization: 'Code for Good',
  //   role: 'Volunteer Developer',
  //   period: '2023 - Present',
  //   description:
  //     'Building web applications for non-profit organizations to help them achieve their missions and reach more people.',
  // },
  {
    organization: 'Fondacioni Freskia',
    role: 'Volunteer',
    period: '2023 - Present',
    description:
      'A volunteer at Fondacioni Freskia helps support orphans and people in need. The work includes organizing donations, delivering food and clothing, helping with educational activities, and offering support to individuals and families facing difficult situations. The goal is to provide care, stability, and hope to those who need it most.',
  },
  {
    organization: 'Instituti Hasan Tahsin',
    role: 'Volunteer',
    period: '2023 - Present',
    description:
      'As a volunteer at Instituti Hasan Tahsin, I am part of the PR team, helping shape the institution’s public image and communication. I take part in important decision-making processes and contribute ideas that guide ongoing projects. I also manage and maintain the institution’s website, ensuring that its information is accurate, up to date, and well-presented.',
  },
];

type VoluntaryProject = {
  title: string;
  image: string;
  link?: string;
};

const voluntaryProjects: VoluntaryProject[] = [
  // Example items – replace image and link values with your own
  // {
  //   title: 'Community Coding Workshop',
  //   image: SomeImageImport,
  //   link: 'https://example.com/workshop',
  // },
  {
    title: 'Lectures and gifts for children',
    image: work1,
    link: 'https://fondacionifreskia.ct.ws/view-projects.php?id=88',
  },
  {
    title: 'Food packages for people in need',
    image: work2,
    link: 'https://fondacionifreskia.ct.ws/view-projects.php?id=89',
  },
  {
    title: 'Lectures and distribution of gifts for children',
    image: work3,
    link: 'https://fondacionifreskia.ct.ws/view-projects.php?id=98',
  },
  {
    title: 'Eid al-Adha table',
    image: work4,
    link: 'https://fondacionifreskia.ct.ws/view-projects.php?id=102',
  },
];

export function Voluntary() {
  return (
    <section id="voluntary" className="py-20 bg-[#7CCF8A]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 animate-fadeInUp">
          <Heart className="text-[#7CCF8A] mr-3 hover:text-[#2f6f4f] transition-colors duration-300" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Voluntary Work</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          {voluntaryWork.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#7CCF8A] transition-all duration-300 hover:-translate-x-2 animate-slideInRight"
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

        {voluntaryProjects.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-12 animate-fadeInUp">
              <Heart className="text-[#7CCF8A] mr-3 hover:text-[#2f6f4f] transition-colors duration-300" size={32} />
              <h3 className="text-3xl font-bold text-gray-900 text-center">Voluntary Projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {voluntaryProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative overflow-hidden group h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                      {project.title}
                    </h4>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#7CCF8A] hover:text-[#2f6f4f] transition-colors"
                      >
                        View Project
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
