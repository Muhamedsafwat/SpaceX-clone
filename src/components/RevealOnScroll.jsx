"use client";
import React from "react";
import { motion } from "framer-motion";

const RevealOnScroll = ({ children }) => {
  return (
    <motion.div
      className="relative w-full flex-1 h-full"
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
