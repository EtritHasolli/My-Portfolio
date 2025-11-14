import { User } from 'lucide-react';
import ProfileImage from '../images/selfimage.jpg';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 animate-fadeInUp">
          <User className="text-[#7CCF8A] mr-3 hover:text-[#2f6f4f] transition-colors duration-300" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-[20rem] h-[20rem] rounded-full overflow-hidden  flex-shrink-0 animate-scaleIn">
            <img
              src={ProfileImage}
              alt="Etrit Hasolli portrait"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <p className="text-xl text-gray-600 leading-relaxed mb-6 hover:text-gray-800 transition-colors duration-300 animate-fadeInUp">
              I am a full-stack developer with a strong foundation in modern web technologies and a
              commitment to building reliable, efficient, and user-focused digital experiences. My work
              is guided by a deep respect for clean architecture, maintainability, and thoughtful design.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6 hover:text-gray-800 transition-colors duration-300 animate-fadeInUp">
              Through academic study and professional projects, I have gained experience across the
              full development cycle—from frontend interfaces to backend systems and database design.
              I strive to create solutions that solve real problems, adapt to user needs, and stand the
              test of time. Curiosity keeps me learning, while discipline keeps my craft sharp.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300 animate-fadeInUp">
              Outside of development, I dedicate my time to community service. I volunteer with
              organizations that support orphans, families in need, and educational initiatives. I also
              contribute to public relations efforts and manage institutional websites—ensuring clear,
              accessible communication that reflects each organization’s mission. These roles remind me
              that technology serves its highest purpose when it uplifts others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
