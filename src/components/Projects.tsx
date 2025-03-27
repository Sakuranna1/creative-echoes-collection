
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
    <section id="work" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced colorful background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-secondary/20 to-secondary/60 opacity-80"></div>
        
        {/* Large colorful blobs */}
        <div className="absolute top-[5%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-blue-400/50 via-indigo-500/40 to-violet-500/30 blur-[100px] opacity-70 animate-slow-spin"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-amber-300/40 via-orange-400/30 to-rose-400/30 blur-[120px] opacity-70 animate-float"></div>
        
        {/* Medium sized accent blobs */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-bl from-emerald-400/30 via-teal-500/30 to-cyan-500/20 blur-[80px] opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-tr from-fuchsia-400/30 via-pink-500/30 to-rose-400/20 blur-[70px] opacity-70 animate-float"></div>
        
        {/* Small accent color pops */}
        <div className="absolute top-2/3 right-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-400/30 to-amber-500/20 blur-[60px] opacity-70 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/2 w-56 h-56 rounded-full bg-gradient-to-l from-purple-400/30 to-indigo-500/20 blur-[65px] opacity-70 animate-slow-spin"></div>
        <div className="absolute bottom-1/2 right-[20%] w-40 h-40 rounded-full bg-gradient-to-t from-green-400/30 to-emerald-500/20 blur-[55px] opacity-70 animate-float"></div>
      </div>
      
      <div className="container-custom relative z-10">
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
