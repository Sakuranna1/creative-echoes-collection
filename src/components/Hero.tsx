
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
      className="intro-section min-h-screen flex flex-col justify-center relative pt-28 pb-16 overflow-hidden"
    >
      <div className="container-custom relative z-10">
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

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block opacity-0 translate-y-8 transition-all duration-700 delay-500 animate-on-load z-10">
        <a href="#work" className="rounded-full bg-white/30 backdrop-blur-sm p-3 border border-white/20 hover:bg-white/50 transition-colors duration-300">
          <ArrowDownIcon size={20} />
        </a>
      </div>
      
      {/* Enhanced colorful background with more blur elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Large primary gradient blob */}
        <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-blue-400/30 via-purple-400/40 to-primary/50 blur-[100px] opacity-80" />
        
        {/* Secondary warm gradient blob */}
        <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-amber-300/30 via-rose-300/30 to-pink-400/40 blur-[100px] opacity-70" />
        
        {/* Accent smaller blobs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-300/40 to-blue-400/30 blur-[80px] opacity-60 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-l from-violet-300/40 to-fuchsia-400/30 blur-[70px] opacity-60 animate-slow-spin" />
        
        {/* Small accent highlights */}
        <div className="absolute top-2/3 left-1/3 w-32 h-32 rounded-full bg-yellow-300/30 blur-[50px] opacity-70 animate-pulse" />
        <div className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-emerald-300/30 blur-[40px] opacity-70 animate-float" />
      </div>
    </section>
  );
};

export default Hero;
