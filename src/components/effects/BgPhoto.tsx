"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BgPhoto() {
  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Image
        src="/images/wave.jpg"
        alt="배경"
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  );
}
