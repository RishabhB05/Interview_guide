"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

const HeroSection = () => {

  const [scrolled, setScrolled] = useState(false);
  const imageContainerRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      setScrolled(scrollPosition > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);






  return (
    <section className='w-full pt-30 md:pt-40 pb-10 overflow-x-hidden'>
      <div className='space-y-6 text-center'>
        <div className='space-y-6 mx-auto'>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text pb-2 pr-2 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600">
            Your AI Career Coach for 
            <br />
            Professional Success
          </h1>
          <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
            Advance your career with personalized guidance, interview preparation,
            and skill development powered by AI.
          </p>
        </div>

        <div>
          <Link href="/sign-up">
            <Button size="lg">Get started</Button>
          </Link>
        </div>

        {/* Hero Image Section with Tailwind transforms */}
        <div className='perspective-[1000px] mt-5 md:mt-10'>
          <div
            ref={imageContainerRef}
            className={`transition-transform duration-500 ease-out will-change-transform mx-auto
              ${scrolled ? 'rotate-x-0 translate-x-10 scale-100' : 'rotate-x-[15deg] scale-100'}
            `}
            style={{ maxWidth: 1200 }}
          >
            <Image
              src="/banner.jpeg"
              alt="Hero Image"
              width={1200}
              height={500}
              className='rounded-lg shadow-2xl border mx-auto'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;