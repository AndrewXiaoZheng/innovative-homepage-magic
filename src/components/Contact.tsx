
import { FadeIn } from './FadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
          
          <FadeIn direction="left" className="relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-100 rounded-full opacity-70 animate-float" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }} />
            
            <div className="relative bg-white p-8 rounded-2xl shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
