"use client";

import React from 'react';
import PlusIcon from '../assets/icons/plus.svg'
import MinusIcon from '../assets/icons/minus.svg'
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

const items = [
  {
    question: "How do I start playing and earning?",
    answer:
      "Simply connect your Solana wallet, deposit funds to enter tournaments or matches, and start competing. Upon winning, rewards are automatically distributed to your connected wallet.",
  },
  {
    question: "What games are supported?",
    answer:
      "We support popular competitive titles including Call of Duty (Warzone and MP), Madden 25, NBA 2K25, Fortnite and Marvel Rivals. Our platform will continuously add new games based on community demand and technical feasibility.",
  },
  {
    question: "How are tournaments structured?",
    answer:
      "We offer various tournament formats including single elimination, double elimination, and round-robin. Entry fees and prize pools vary by tournament, with options ranging from free-to-play to high-stakes competitions.",
  },
  {
    question: "What happens if I experience technical issues during a match?",
    answer:
      "Our support team is available 24/7 to assist with any technical difficulties. We have clear dispute resolution procedures in place, and all matches are monitored to ensure fair outcomes. In case of verified technical issues, appropriate compensation or match rescheduling will be arranged.",
  },
];

const AccordionItem = ({ question, answer} : { question: string; answer: string}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='py-7 border-b border-white/30' 
    onClick={() => setIsOpen(!isOpen)}>
              <div className='flex items-center '>
                <span className='flex-1 text-lg font-bold'>{question}</span>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
              </div>
              <AnimatePresence>
              {isOpen && (
                <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginTop: '16px'
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0
                }}>
                  {answer}
                </motion.div>
              )}
              </AnimatePresence>
            </div>
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter'>Frequently asked questions</h2>
        <div className='mt-12'>
          {items.map(({ question, answer }) =>
            <AccordionItem question={question} answer={answer} key={question}/>
          )}
        </div>
      </div>
    </div>
  );
};
