import React from "react";
import { motion } from "framer-motion";

function TheBand() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
      className=""
    >
      <svg
        className="mx-auto py-2"
        width="2"
        height="100"
        viewBox="0 0 2 252"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V251.5" stroke="#48704f" strokeWidth="2" />
      </svg>
      <p className="text-4xl pb-1">The Breakup & The Band - 2012</p>
      <p className="text-xl pb-1 px-2">
        Anne broke his heart, He wrote an album!
      </p>
      <a
        className="underline text-xl pb-2"
        href="https://www.youtube.com/watch?v=QKLCa1LhBzk"
        target="_blank"
        rel="noreferrer"
      >
        You can find the music here!
      </a>
      <svg
        className="mx-auto py-2"
        width="1"
        height="200"
        viewBox="0 0 2 252"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V251.5" stroke="#48704f" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}

export default TheBand;
