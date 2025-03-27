
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
      
      {/* Enhanced colorful background with many vibrant blur elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Primary gradient blob - larger and more vibrant */}
        <div className="absolute top-1/3 right-[10%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/50 to-primary/60 blur-[120px] opacity-90 animate-slow-spin" />
        
        {/* Secondary warm gradient blob */}
        <div className="absolute -bottom-[10%] left-[5%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-amber-400/40 via-rose-400/40 to-pink-500/50 blur-[100px] opacity-80 animate-float" />
        
        {/* Accent blobs - added more with various colors */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-500/40 blur-[90px] opacity-70 animate-float" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 rounded-full bg-gradient-to-l from-violet-400/50 to-fuchsia-500/40 blur-[80px] opacity-70 animate-slow-spin" />
        
        {/* New colorful elements */}
        <div className="absolute top-1/2 left-[40%] w-64 h-64 rounded-full bg-gradient-to-br from-emerald-400/40 to-teal-500/30 blur-[70px] opacity-80 animate-pulse" />
        <div className="absolute bottom-[20%] right-[30%] w-48 h-48 rounded-full bg-gradient-to-tl from-yellow-400/40 to-orange-500/30 blur-[60px] opacity-70 animate-float" />
        <div className="absolute top-[15%] right-[25%] w-40 h-40 rounded-full bg-gradient-to-bl from-red-400/30 to-rose-500/20 blur-[50px] opacity-70 animate-pulse" />
        
        {/* Small accent highlights */}
        <div className="absolute top-2/3 left-1/3 w-36 h-36 rounded-full bg-yellow-300/40 blur-[60px] opacity-80 animate-pulse" />
        <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-emerald-300/40 blur-[50px] opacity-80 animate-float" />
        <div className="absolute bottom-1/4 left-[15%] w-28 h-28 rounded-full bg-indigo-400/30 blur-[45px] opacity-70 animate-slow-spin" />
        <div className="absolute top-[40%] right-[60%] w-24 h-24 rounded-full bg-pink-300/40 blur-[40px] opacity-70 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
