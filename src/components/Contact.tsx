import { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Briefcase, Facebook } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const CONTACT_ENDPOINT =
  import.meta.env.PROD ? '/.netlify/functions/contact' : '/api/contact';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      const data = (await response.json()) as { success: boolean; error?: string };

      if (!data.success) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12 animate-fadeInUp">
          <Mail
            className="text-[#7CCF8A] mr-3 hover:text-[#2f6f4f] transition-colors duration-300"
            size={32}
          />
          <h2 className="text-4xl font-bold text-gray-900">Contact</h2>
        </div>
        <div className="max-w-2xl mx-auto animate-fadeInUp">
          <p className="text-lg text-gray-600 mb-8 text-center">
            I'm always interested in hearing about new projects and opportunities. Whether you have
            a question or just want to say hi, feel free to reach out!
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50/80 backdrop-blur rounded-2xl shadow-md px-6 sm:px-8 py-8 mb-10 border border-[#7CCF8A]/20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="text-left">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7CCF8A] focus:border-transparent transition-shadow shadow-sm"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7CCF8A] focus:border-transparent transition-shadow shadow-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6 text-left">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#7CCF8A] focus:border-transparent transition-shadow shadow-sm"
                placeholder="Tell me a bit about your project or question..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#7CCF8A] text-white rounded-lg hover:bg-[#2f6f4f] transition-all duration-300 font-medium transform hover:scale-[1.02] active:scale-95 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status === 'success' && (
            <p className="text-center text-sm text-green-600 mb-6">
              Thank you! Your message has been sent successfully.
            </p>
          )}

          {status === 'error' && (
            <p className="text-center text-sm text-red-600 mb-6">
              {errorMessage || 'Something went wrong. Please try again later.'}
            </p>
          )}

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/EtritHasolli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-[#2f6f4f] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/etrit-hasolli/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-[#7CCF8A] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/etritt.h/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-[#7CCF8A] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/etrit.hasolli.9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-[#7CCF8A] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.bytefull.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-[#7CCF8A] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Briefcase size={24} />
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-20 pt-8 border-t border-[#7CCF8A]/20 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Etrit Hasolli. All rights reserved.</p>
      </footer>
    </section>
  );
}
