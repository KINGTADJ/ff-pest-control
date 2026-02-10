'use client';

import { motion } from 'framer-motion';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0a1a0f] flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo Animation - Bug Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <svg viewBox="0 0 24 24" className="w-24 h-24 mx-auto">
            <motion.path
              d="M12 2C10.34 2 9 3.34 9 5V6H6V8H7.07C6.41 8.59 6 9.47 6 10.5V11H4V13H6V14.5C6 15.07 6.08 15.63 6.22 16.16L4.5 17.88L5.91 19.29L7.23 17.97C7.89 18.61 8.73 19.07 9.67 19.28L9 22H11V19.94C11.32 19.98 11.66 20 12 20C12.34 20 12.68 19.98 13 19.94V22H15L14.33 19.28C15.27 19.07 16.11 18.61 16.77 17.97L18.09 19.29L19.5 17.88L17.78 16.16C17.92 15.63 18 15.07 18 14.5V13H20V11H18V10.5C18 9.47 17.59 8.59 16.93 8H18V6H15V5C15 3.34 13.66 2 12 2M10 10H14V12H10V10M10 14H14V16H10V14Z"
              fill="none"
              stroke="#eab308"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-white text-xl font-light tracking-[0.3em] uppercase">
            F & F
          </div>
          <div className="text-yellow-400 text-sm tracking-[0.2em] uppercase mt-1">
            Pest Control
          </div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
