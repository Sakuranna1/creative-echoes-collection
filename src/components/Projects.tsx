
import React, { useEffect, useRef } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "FinFlow Banking App Redesign",
    description: "A comprehensive redesign of a banking application focusing on simplifying complex financial tasks through intuitive UI patterns.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2978&auto=format&fit=crop",
    categories: ["UX Design", "Mobile App", "Fintech"],
    link: "#case-study-1"
  },
  {
    id: 2,
    title: "Healthtrack Wellness Platform",
    description: "An integrated health monitoring dashboard that combines fitness tracking, nutrition planning, and mental wellness in one coherent experience.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2970&auto=format&fit=crop",
    categories: ["UI/UX", "Web App", "Healthcare"],
    link: "#case-study-2"
  },
  {
    id: 3,
    title: "Travelo Experience Platform",
    description: "A travel planning platform that connects travelers with unique local experiences, emphasizing discovery and personalization.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2970&auto=format&fit=crop",
    categories: ["Product Design", "Marketplace", "Travel"],
    link: "#case-study-3"
  },
  {
    id: 4,
    title: "WorkSpace Collaboration Tool",
    description: "A reimagined project management tool that brings teams together through intuitive workflows and seamless communication.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2970&auto=format&fit=crop",
    categories: ["UX Research", "Enterprise", "SaaS"],
    link: "#case-study-4"
  }
];

const Projects = () => {
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
    <section id="work" className="py-20 bg-gradient-to-b from-background to-secondary/50" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Selected Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of work that showcases my approach to product design challenges.
            Each project represents a unique problem space and solution strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card rounded-2xl overflow-hidden border animate-on-scroll`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories.map((category) => (
                    <Badge key={category} variant="secondary" className="font-medium">
                      {category}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button asChild variant="ghost" className="p-0 h-auto group">
                  <a href={project.link} className="flex items-center font-medium">
                    View Case Study
                    <ArrowUpRightIcon size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="#contact">Want to work together? Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
