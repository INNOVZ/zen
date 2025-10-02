// components/WaveText.tsx
"use client";

import { motion } from "framer-motion";

export default function RevealText({ text }: { text: string }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2 * i,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
