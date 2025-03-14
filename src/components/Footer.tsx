
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FadeIn } from './FadeIn';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FadeIn className="space-y-6">
            <h3 className="text-xl font-semibold">eMobi</h3>
            <p className="text-gray-400">
              Creating exceptional digital experiences through innovative design and technology solutions.
            </p>
            <div className="flex space-x-4">
              {[
                'facebook',
                'twitter',
                'instagram',
                'linkedin',
              ].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5" />
                </a>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delay={100} className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Team',
                'Careers',
                'Press',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={200} className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Applications',
                'UI/UX Design',
                'Digital Marketing',
                'Cloud Solutions',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={300} className="space-y-6">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter to receive updates and insights.
            </p>
            <div className="flex space-x-2">
              <Input
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 focus:border-blue-500 text-white"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </FadeIn>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} eMobi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              'Privacy Policy',
              'Terms of Service',
              'Cookie Policy',
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
