import { User } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 animate-fadeInUp">
          <User className="text-[#7CCF8A] mr-3 hover:text-[#2f6f4f] transition-colors duration-300" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-6 hover:text-gray-800 transition-colors duration-300 animate-fadeInUp">
            I'm a dedicated developer with a passion for building meaningful projects that make a
            difference. With expertise in modern web technologies, I create solutions that are both
            functional and beautiful.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 hover:text-gray-800 transition-colors duration-300 animate-fadeInUp">
            My journey in tech has been driven by curiosity and a desire to solve real-world
            problems. I believe in writing clean, maintainable code and continuously learning new
            technologies to stay at the forefront of the industry.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300 animate-fadeInUp">
            When I'm not coding, you'll find me contributing to open-source projects, volunteering
            in my community, or exploring new technologies that can help make the world a better
            place.
          </p>
        </div>
      </div>
    </section>
  );
}
