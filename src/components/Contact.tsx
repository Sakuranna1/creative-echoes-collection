import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MailIcon, 
  LinkedinIcon, 
  TwitterIcon, 
  InstagramIcon, 
  CheckCircleIcon,
  SendIcon,
  LoaderIcon
} from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast("Message sent successfully", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        icon: <CheckCircleIcon className="text-green-500" />,
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-background" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a design challenge?
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 animate-on-scroll">
              <h3 className="text-2xl font-display font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through the form or directly via email.
                I'm based in San Francisco, but work with clients worldwide.
              </p>
              
              <div className="flex items-center mb-4 gap-3">
                <MailIcon size={20} className="text-primary/80" />
                <a href="mailto:hello@ryanmiller.design" className="text-primary hover:underline">
                  hello@ryanmiller.design
                </a>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Follow me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <LinkedinIcon size={20} />, href: "#", label: "LinkedIn" },
                    { icon: <TwitterIcon size={20} />, href: "#", label: "Twitter" },
                    { icon: <InstagramIcon size={20} />, href: "#", label: "Instagram" }
                  ].map((social) => (
                    <a 
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-colors hover:bg-secondary/70"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="rounded-lg min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  size="lg"
                  className="rounded-lg w-full sm:w-auto px-8"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderIcon size={16} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
