import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 animate-fadeInUp">
          <Mail className="text-[#7CCF8A] mr-3" size={32} />
          <h2 className="text-4xl font-bold text-gray-900">Contact</h2>
        </div>
        <div className="max-w-2xl mx-auto text-center animate-fadeInUp">
          <p className="text-lg text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities. Whether you have
            a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 bg-[#7CCF8A] text-white rounded-lg hover:bg-[#2f6f4f] transition-all duration-300 font-medium mb-12 transform hover:scale-105 active:scale-95"
          >
            Send Me an Email
          </a>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-[#2f6f4f] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-[#7CCF8A] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-[#7CCF8A] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-20 pt-8 border-t border-[#7CCF8A]/20 text-center text-gray-500">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </section>
  );
}
