
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
      
      {/* Vibrant colorful background with many more color elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Large primary blobs */}
        <div className="absolute top-0 right-0 w-[55rem] h-[55rem] rounded-full bg-gradient-to-br from-blue-600/50 via-purple-600/50 to-violet-600/60 blur-[130px] opacity-90 animate-slow-spin" />
        <div className="absolute -bottom-[15%] left-[5%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-tr from-amber-500/50 via-rose-500/50 to-pink-600/60 blur-[120px] opacity-80 animate-float" />
        
        {/* Medium accent blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/60 to-blue-600/50 blur-[100px] opacity-80 animate-float" />
        <div className="absolute bottom-1/3 right-1/5 w-[30rem] h-[30rem] rounded-full bg-gradient-to-l from-violet-500/60 to-fuchsia-600/50 blur-[110px] opacity-80 animate-slow-spin" />
        
        {/* New vibrant elements */}
        <div className="absolute top-1/2 left-[40%] w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/50 to-teal-600/40 blur-[90px] opacity-80 animate-pulse" />
        <div className="absolute bottom-[20%] right-[30%] w-72 h-72 rounded-full bg-gradient-to-tl from-yellow-500/50 to-orange-600/40 blur-[85px] opacity-80 animate-float" />
        <div className="absolute top-[15%] right-[25%] w-64 h-64 rounded-full bg-gradient-to-bl from-red-500/40 to-rose-600/30 blur-[80px] opacity-80 animate-pulse" />
        
        {/* Additional color pops */}
        <div className="absolute top-2/3 left-1/3 w-52 h-52 rounded-full bg-yellow-400/50 blur-[75px] opacity-90 animate-pulse" />
        <div className="absolute top-1/4 right-1/3 w-48 h-48 rounded-full bg-emerald-400/50 blur-[70px] opacity-90 animate-float" />
        <div className="absolute bottom-1/4 left-[15%] w-44 h-44 rounded-full bg-indigo-500/40 blur-[65px] opacity-80 animate-slow-spin" />
        <div className="absolute top-[40%] right-[60%] w-40 h-40 rounded-full bg-pink-400/50 blur-[60px] opacity-80 animate-pulse" />
        
        {/* New small bright accent pops */}
        <div className="absolute top-[30%] left-[10%] w-32 h-32 rounded-full bg-lime-400/60 blur-[55px] opacity-90 animate-float" />
        <div className="absolute bottom-[10%] right-[15%] w-36 h-36 rounded-full bg-sky-400/60 blur-[58px] opacity-90 animate-pulse" />
        <div className="absolute top-[75%] left-[60%] w-28 h-28 rounded-full bg-amber-400/60 blur-[50px] opacity-90 animate-slow-spin" />
        <div className="absolute top-[10%] left-[40%] w-24 h-24 rounded-full bg-fuchsia-400/60 blur-[45px] opacity-90 animate-float" />
      </div>
    </section>
  );
};

export default Hero;
