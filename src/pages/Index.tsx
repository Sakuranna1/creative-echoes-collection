
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // This effect adds the fade-in animation to elements when they come into view
  useEffect(() => {
    // Make sure scrollbar is at the top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
