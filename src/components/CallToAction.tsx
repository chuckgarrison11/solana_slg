"use client"

import Image from 'next/image';
import { MotionConfig, useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  })

  useEffect (() => {
    scrollYProgress.on("change", (value) => console.log("value"))
  }, [])

  const translateY = useTransform(scrollYProgress, [0, 1], [55, -55]);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center" 
    ref={containerRef}>
      <div className="container max-w-xl relative">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get Instant Access</h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="your@email.com" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"/>
          <button className="bg-white text-black h-12 rounded-lg px-5">Get Access</button>
        </form>
      </div>
    </div>
  );
};
