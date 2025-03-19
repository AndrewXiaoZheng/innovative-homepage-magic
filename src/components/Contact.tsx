
import { FadeIn } from './FadeIn';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <FadeIn>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                Get in Touch
              </span>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                Let's Start a Conversation
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or just want to learn more about our services? We'd love to hear from you. Fill out the form and we'll get back to you soon.
              </p>
            </FadeIn>
            
            <div className="space-y-6 pt-4">
              <FadeIn delay={300}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email Us</h3>
                    <p className="mt-1 text-muted-foreground">Our friendly team is here to help.</p>
                    <a href="mailto:hello@example.com" className="mt-2 inline-block text-blue-600 hover:text-blue-800 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Visit Us</h3>
                    <p className="mt-1 text-muted-foreground">Come and say hello at our office.</p>
                    <p className="mt-2 text-sm">
                      123 Design Street, Tokyo, Japan
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={500}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Call Us</h3>
                    <p className="mt-1 text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+1234567890" className="mt-2 inline-block text-blue-600 hover:text-blue-800 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
