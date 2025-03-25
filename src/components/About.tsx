
import React, { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  PencilRulerIcon, 
  UsersIcon, 
  LightbulbIcon, 
  CodesandboxIcon,
  CheckCircle2Icon
} from 'lucide-react';

const skills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "UI Design",
  "User Testing",
  "Design Systems",
  "Information Architecture",
  "Accessibility",
  "Visual Design",
  "Interaction Design",
  "Design Strategy",
  "Frontend Development",
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-secondary/50 to-background" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Hello, I'm Ryan. I design products that people love to use.
            </h2>
            <p className="text-muted-foreground mb-6">
              With over 8 years of experience in the field, I've worked with companies ranging from startups to Fortune 500 corporations, helping them create products that balance business needs with user expectations.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines strategic thinking with pixel-perfect execution. I believe that the best designs emerge from a deep understanding of users, business goals, and technical constraints.
            </p>
            <p className="text-muted-foreground">
              When I'm not designing, you'll find me exploring photography, reading about psychology, or hiking in the mountains.
            </p>
          </div>

          <div className="relative animate-on-scroll" style={{ transitionDelay: '150ms' }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" 
                alt="Ryan Miller, Product Designer" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background shape */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary rounded-full -z-10"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/50 rounded-full -z-10"></div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-16 animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">My Design Principles</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide my approach to every design challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <UsersIcon className="h-10 w-10 text-primary/80" />,
                title: "User-Centered",
                description: "I place users at the heart of the design process, ensuring solutions address real needs."
              },
              {
                icon: <LightbulbIcon className="h-10 w-10 text-primary/80" />,
                title: "Purposeful Innovation",
                description: "I innovate with purpose, not for the sake of trends but to solve problems effectively."
              },
              {
                icon: <PencilRulerIcon className="h-10 w-10 text-primary/80" />,
                title: "Refined Simplicity",
                description: "I believe in removing the unnecessary to focus on what truly matters."
              },
              {
                icon: <CodesandboxIcon className="h-10 w-10 text-primary/80" />,
                title: "Systematic Approach",
                description: "I create scalable design systems that ensure consistency and efficiency."
              }
            ].map((item, index) => (
              <div 
                key={item.title} 
                className="glass-panel p-6 animate-on-scroll" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll">
            <h3 className="text-2xl font-display font-bold mb-6 text-center">Skills & Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={skill} 
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2Icon size={16} className="text-primary/80" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
