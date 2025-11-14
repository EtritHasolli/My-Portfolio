import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#7CCF8A]/5 to-[#2f6f4f]/5 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Hello, I'm <span className="text-[#7CCF8A] hover:text-[#2f6f4f] transition-colors duration-300">Etrit Hasolli</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          I am a full-stack developer focused on creating high-quality and impactful digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#7CCF8A] text-white rounded-lg hover:bg-[#2f6f4f] transition-all duration-300 font-medium transform hover:scale-105 active:scale-95"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-[#2f6f4f] border-2 border-[#7CCF8A] rounded-lg hover:bg-[#7CCF8A] hover:text-white transition-all duration-300 font-medium transform hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </div>
        <a
          href="#about"
          className="inline-block mt-16 text-[#7CCF8A]/50 hover:text-[#7CCF8A] transition-colors duration-300"
        >
          <ArrowDown size={32} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
