"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <p className="text-white/60 text-sm mb-2 font-light">스크롤 하세요</p>
      <motion.div className="w-5 h-10 border border-white/20 rounded-full flex items-center justify-center">
        <motion.div
          className="w-1 h-1 bg-white/60 rounded-full"
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
