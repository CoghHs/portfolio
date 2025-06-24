"use client";

import { motion } from "framer-motion";

export default function ModalBgPhoto() {
  return (
    <motion.div
      className="fixed z-20 opacity-25 pointer-events-none w-full h-full "
      style={{ backgroundImage: "url('/images/wave1.png')" }}
    />
  );
}
