import { Menu, X, Download } from 'lucide-react';
import { useState } from 'react';
import ResumePDF from '../files/EtritHasolli_Resume.pdf';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Voluntary Work', href: '#voluntary' },
    { name: 'Contact', href: '#contact' },
    {
      name: 'Resume',
      href: ResumePDF,
      download: 'EtritHasolli_Resume.pdf',
      isDownload: true,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#7CCF8A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-bold text-[#2f6f4f] hover:text-[#7CCF8A] transition-colors duration-300">
              Etrit Hasolli
            </a>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  download={item.download}
                  className="text-gray-700 hover:text-[#7CCF8A] transition-all duration-300 font-medium relative group"
                >
                  {item.isDownload ? (
                    <div className="flex items-center">
                      <Download
                        size={20}
                        className="text-[#2f6f4f] group-hover:text-[#7CCF8A] transition-colors duration-300"
                      />
                      <span className="ml-2 text-sm opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
                        Download Resume
                      </span>
                    </div>
                  ) : (
                    item.name
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7CCF8A] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-[#2f6f4f] hover:bg-[#7CCF8A]/10 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile side drawer */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white z-50 flex flex-col transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full shadow-none'
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-end px-6 h-16 border-b border-[#7CCF8A]/20">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-[#2f6f4f] hover:bg-[#7CCF8A]/10 transition-all duration-300"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                download={item.download}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:text-[#7CCF8A] hover:bg-[#7CCF8A]/10 font-medium transition-all duration-200"
              >
                {item.isDownload ? (
                  <>
                    <Download size={18} className="text-[#2f6f4f]" />
                    Download Resume
                  </>
                ) : (
                  item.name
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
