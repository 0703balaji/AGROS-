import { ReactNode } from "react";
import { motion } from "motion/react";

interface PremiumCardProps {
  children: ReactNode;
  delay?: number;
  onClick?: () => void;
  className?: string;
  gradient?: boolean;
  glass?: boolean;
}

export function PremiumCard({ children, delay = 0, onClick, className = "", gradient = false, glass = false }: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        scale: onClick ? 1.02 : 1, 
        y: onClick ? -4 : 0,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`rounded-[20px] ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        background: glass 
          ? "rgba(255, 255, 255, 0.7)"
          : gradient
          ? "linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)"
          : "#ffffff",
        backdropFilter: glass ? "blur(20px)" : "none",
        border: glass ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(0, 0, 0, 0.04)",
        boxShadow: onClick
          ? "0 4px 16px rgba(0, 0, 0, 0.06)"
          : "0 2px 8px rgba(0, 0, 0, 0.04)",
        transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(46, 125, 50, 0.12)";
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.06)";
        }
      }}
    >
      {children}
    </motion.div>
  );
}
