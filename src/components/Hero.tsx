"use client"

import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import ArrowIcon from '../assets/icons/arrow-w.svg';
import gameController from '../assets/images/controller.png';
import solToken from '../assets/images/sol.png';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = () => {
  const [showCopyAlert, setShowCopyAlert] = useState(false);
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Replace with your actual contract address

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setShowCopyAlert(true);
      setTimeout(() => setShowCopyAlert(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)]"></div>
      
      <AnimatePresence>
        {showCopyAlert && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex absolute"
          >
            <Alert className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <AlertDescription className='text-center'>
                Contract Address: <br />7DdHyxLZQuudndfrX3ZDDqgK6zPFbm17wGwKJqgjpump
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container relative">
        <div className="flex items-center justify-center">
          <button 
            onClick={handleCopy}
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30 hover:bg-white/5 transition-colors"
          >
            <span className="bg-[linear-gradient(to_right,#A78AC4,#6EB4C0,#4A619D)] text-transparent bg-clip-text [-webkit-background-clip:text]">Contract Address</span>
            <span className='inline-flex items-center gap-1'>
              <span>Click to Copy</span>
              <ArrowIcon />
            </span>
          </button>
        </div>

        <div className='flex justify-center mt-8'>
          <div className='inline-flex relative'>
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex'>
              Play. Win.<br />Earn.
            </h1>
            <motion.div 
              className='absolute right-[476px] top-[108px] hidden sm:inline'
              drag
              dragSnapToOrigin
            >
              <Image 
                src={gameController} 
                height="200" 
                width="200" 
                alt="" 
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            
            <motion.div 
              className='absolute top-[56px] left-[498px] hidden sm:inline'
              drag
              dragSnapToOrigin
            >
              <Image 
                src={solToken} 
                height="200" 
                width="200" 
                alt="" 
                className='max-w-none'
                draggable="false"
              />
            </motion.div>
          </div>
        </div>

        <div className='flex justify-center'>
          <p className='text-center text-xl mt-8 max-w-md'>
          Join the future of competitive gaming where every match counts. Compete in head-to-head battles and tournaments to earn SOL, SLG tokens, and other crypto rewards!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;