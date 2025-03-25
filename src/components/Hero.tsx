
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-load');
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
    <section 
      ref={sectionRef}
      id="home" 
      className="intro-section min-h-screen flex flex-col justify-center relative pt-28 pb-16"
    >
      <div className="container-custom">
        <div className="max-w-4xl">
          <div className="inline-block rounded-full px-3 py-1 bg-secondary text-sm font-medium mb-6 opacity-0 translate-y-8 transition-all duration-500 delay-100 animate-on-load">
            Product Designer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-200 animate-on-load">
            Crafting digital products that connect with people
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl opacity-0 translate-y-8 transition-all duration-700 delay-300 animate-on-load">
            I'm Ryan, a product designer with over 8 years of experience creating intuitive and engaging digital experiences that solve real problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-400 animate-on-load">
            <Button asChild size="lg" className="rounded-lg px-8 group">
              <a href="#work">
                View my work
                <ArrowRightIcon size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg px-8">
              <a href="#about">About me</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block opacity-0 translate-y-8 transition-all duration-700 delay-500 animate-on-load">
        <a href="#work" className="rounded-full bg-white/30 backdrop-blur-sm p-3 border border-white/20 hover:bg-white/50 transition-colors duration-300">
          <ArrowDownIcon size={20} />
        </a>
      </div>
      
      {/* Abstract shapes in background */}
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 blur-3xl opacity-60 animate-slow-spin" />
      <div className="absolute bottom-1/4 left-10 w-56 h-56 rounded-full bg-gradient-to-tr from-amber-100 to-rose-100 blur-3xl opacity-50 animate-float" />
    </section>
  );
};

export default Hero;
