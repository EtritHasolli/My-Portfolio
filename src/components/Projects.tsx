import { Folder, ExternalLink, Github } from 'lucide-react';
import AppointlyImage from '../images/appointly.jpg';
import DigitalSeaImage from '../images/digisea.jpg';
import FondacioniFreskiaImage from '../images/fondacioni-freskia.jpg';

const projects = [
  {
    title: 'Appointly',
    description:
      'A professionally built platform that enables businesses to register and manage their appointments seamlessly, while providing clients with an easy and accessible way to book appointments directly through the website.',
    image: AppointlyImage,
    tags: ['React', 'Node.js', 'Tailwind CSS', 'JavaScript', 'Groq', 'Supabase'],
    website: 'https://appointly-ks.netlify.app/',
    github: 'https://github.com/lerthy/Appointlify-Amazon',
  },
  {
    title: 'Digital Sea',
    description:
      'An e-commerce platform with advanced filtering, cart management, and payment integration.',
    image: DigitalSeaImage,
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    website: 'https://digitalsea.ct.ws/',
    github: 'https://github.com/jasinua/DigitalSea',
  },
  {
    title: 'Fondacioni Freskia',
    description:
      'A website for a non-profit organization that provides free education to children in need.',
    image: FondacioniFreskiaImage,
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    website: 'https://fondacionifreskia.ct.ws/',
    github: 'https://github.com/jasinua/fondacionifreskiaa',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#7CCF8A]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 animate-fadeInUp">
          <Folder className="text-[#7CCF8A] mr-3" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-[#7CCF8A] hover:-translate-y-2 animate-scaleIn"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <img src={project.image} alt={project.title} className="w-full h-80 object-fit rounded-md mb-4 transition-all duration-300" />
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-[#7CCF8A]/20 text-[#2f6f4f] rounded-full text-sm font-medium hover:bg-[#7CCF8A] hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.website}
                  className="flex items-center text-[#7CCF8A] hover:text-[#2f6f4f] font-medium transition-all duration-300 group"
                >
                  <ExternalLink size={18} className="mr-1 group-hover:translate-x-1 transition-transform duration-300" />
                  Website
                </a>
                <a
                  href={project.github}
                  className="flex items-center text-gray-700 hover:text-[#7CCF8A] font-medium transition-all duration-300 group"
                >
                  <Github size={18} className="mr-1 group-hover:translate-x-1 transition-transform duration-300" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
