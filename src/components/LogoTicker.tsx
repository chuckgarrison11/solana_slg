// Logos changed to console/platforms or games offered
"use client";

import codLogo from "../assets/images/cod.png";
import maddenLogo from "../assets/images/madden.png";
import twoKLogo from "../assets/images/2k.png";
import fortniteLogo from "../assets/images/fortnite.png";
import rivalsLogo from "../assets/images/rivals.png";
import wZ from "../assets/images/wz.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: codLogo, alt: "Acme Logo" },
  { src: maddenLogo, alt: "Quantum Logo" },
  { src: twoKLogo, alt: "Echo Logo" },
  { src: fortniteLogo, alt: "Celestial Logo" },
  { src: rivalsLogo, alt: "Pulse Logo" },
  { src: wZ, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container px-0">
        <h2 className="text-xl text-center text-white/70">Trusted by the world&apos;'s most innovative teams</h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] before:z-20 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0)) after:bg-[linear-gradient(to_left),#000,rgb(0,0,0,0))]]">
          <motion.div 
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0}}
          animate={{ translateX: "-50%"}}
          className="flex gap-16 flex-none pr-16"
          >
          {images.map(({ src,alt }) => (
            <Image 
              key={alt}
              src={src} 
              alt={alt} 
              className="flex-none h-auto w-auto"/>
          ))}
          {images.map(({ src,alt }) => (
            <Image 
              key={alt}
              src={src} 
              alt={alt} 
              className="flex-none h-auto w-auto"/>
          ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
