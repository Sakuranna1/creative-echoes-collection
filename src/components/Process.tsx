
import React, { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  SearchIcon,
  PenToolIcon,
  LayoutIcon, 
  CodeIcon,
  MoveRightIcon,
} from 'lucide-react';

const Process = () => {
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

  const processSteps = [
    {
      icon: <SearchIcon size={24} />,
      title: "Discover",
      description: "I start by understanding the problem space through research, stakeholder interviews, and competitive analysis."
    },
    {
      icon: <PenToolIcon size={24} />,
      title: "Define",
      description: "Next, I define the core problems and opportunities based on insights, creating user personas and journey maps."
    },
    {
      icon: <LayoutIcon size={24} />,
      title: "Design",
      description: "I then explore solutions through sketches, wireframes, and interactive prototypes, refining based on feedback."
    },
    {
      icon: <CodeIcon size={24} />,
      title: "Deliver",
      description: "Finally, I deliver polished designs with documentation and work closely with developers for implementation."
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-background to-secondary/20" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4">Process</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Design Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured yet flexible approach that adapts to the unique needs of each project
            while ensuring consistent, high-quality outcomes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary hidden md:block"></div>
            
            {processSteps.map((step, index) => (
              <div 
                key={step.title}
                className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-16 last:mb-0 animate-on-scroll"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step number circle that appears in the center on md screens */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center z-10 mb-4 md:mb-0">
                  {step.icon}
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:order-first' : 'md:order-last'} text-center md:text-left`}>
                  <h3 className="text-xl font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Empty div to maintain layout for alternating sides */}
                {index % 2 === 0 ? <div className="hidden md:block md:w-1/2"></div> : null}
              </div>
            ))}

            {/* Final arrow */}
            <div className="w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center mx-auto my-8 animate-on-scroll">
              <MoveRightIcon className="rotate-90" />
            </div>
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <h3 className="text-2xl font-display font-semibold mb-4">Iterative & Collaborative</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My process isn't strictly linear. I believe in continuous iteration, user validation at every stage,
              and close collaboration with stakeholders and developers throughout the journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
