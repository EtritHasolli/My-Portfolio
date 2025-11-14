import { Folder, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description:
      'A full-stack web application built with React and Node.js, featuring real-time updates and user authentication.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    description:
      'An e-commerce platform with advanced filtering, cart management, and payment integration.',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description:
      'A mobile-first responsive dashboard for data visualization with interactive charts and analytics.',
    tags: ['Vue.js', 'D3.js', 'Tailwind'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Project Four',
    description:
      'An open-source library for simplifying complex state management in React applications.',
    tags: ['React', 'TypeScript', 'NPM'],
    demo: '#',
    github: '#',
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
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#7CCF8A] hover:-translate-y-2 animate-scaleIn"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
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
                  href={project.demo}
                  className="flex items-center text-[#7CCF8A] hover:text-[#2f6f4f] font-medium transition-all duration-300 group"
                >
                  <ExternalLink size={18} className="mr-1 group-hover:translate-x-1 transition-transform duration-300" />
                  Demo
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
