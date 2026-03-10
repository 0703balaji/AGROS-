import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router";
import { Home, MessageCircle, Camera, BarChart2, User } from "lucide-react";
import { motion } from "motion/react";

interface MobileLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
}

const navItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: MessageCircle, label: "AI Chat", path: "/chat" },
  { icon: Camera, label: "Scan", path: "/scan" },
  { icon: BarChart2, label: "Insights", path: "/insights" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function MobileLayout({ children, hideNav = false }: MobileLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="flex flex-col relative overflow-hidden"
      style={{
        minHeight: "100dvh",
        background: "#F8FAF9",
        maxWidth: "100%",
      }}
    >
      <div className="flex-1 overflow-y-auto" style={{ paddingBottom: hideNav ? 0 : 80 }}>
        {children}
      </div>

      {!hideNav && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50"
          style={{
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(46,125,50,0.1)",
            boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
          }}
        >
          <div className="flex items-center justify-around px-2 py-2">
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              const isCenter = idx === 2;

              if (isCenter) {
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className="flex flex-col items-center -mt-6"
                  >
                    <motion.div
                      whileTap={{ scale: 0.92 }}
                      className="flex items-center justify-center rounded-full shadow-lg"
                      style={{
                        width: 60,
}
