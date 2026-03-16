import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#7CCF8A]/5 to-[#2f6f4f]/5 pt-16 overflow-hidden"
    >
      {/* Decorative blurred orbs */}
      <div className="absolute -top-48 -right-48 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] rounded-full bg-[#7CCF8A]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-60 -left-60 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[900px] lg:h-[900px] rounded-full bg-[#2f6f4f]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[1000px] lg:h-[1000px] rounded-full bg-[#7CCF8A]/5 blur-3xl pointer-events-none" />

      {/* Decorative rings */}
      <div className="absolute top-16 left-10 w-24 h-24 rounded-full border border-[#7CCF8A]/20 pointer-events-none" />
      <div className="absolute top-20 left-14 w-14 h-14 rounded-full border border-[#7CCF8A]/15 pointer-events-none" />
      <div className="absolute bottom-24 right-12 w-32 h-32 rounded-full border border-[#7CCF8A]/20 pointer-events-none" />
      <div className="absolute bottom-32 right-20 w-16 h-16 rounded-full border border-[#7CCF8A]/15 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #7CCF8A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.12,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
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
