import { useState } from "react";
import { MapPin, ChevronDown, Globe, Bell, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProfileMenu } from "./ProfileMenu";

const STATES = ["Andhra Pradesh", "Bihar", "Gujarat", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "West Bengal"];
const DISTRICTS: Record<string, string[]> = {
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Thanjavur", "Trichy", "Salem", "Tirunelveli"],
  "Maharashtra": ["Pune", "Mumbai", "Nagpur", "Nashik", "Aurangabad", "Solapur"],
  "Punjab": ["Ludhiana", "Amritsar", "Patiala", "Bathinda", "Jalandhar"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubballi", "Belagavi", "Kalaburagi"],
};
const LANGUAGES = ["English", "हिंदी", "தமிழ்", "ਪੰਜਾਬੀ", "తెలుగు", "मराठी"];

interface MobileHeaderProps {
  title?: string;
  showLocation?: boolean;
}

export function MobileHeader({ title, showLocation = true }: MobileHeaderProps) {
  const [selectedState, setSelectedState] = useState("Tamil Nadu");
  const [selectedDistrict, setSelectedDistrict] = useState("Thanjavur");
  const [selectedLang, setSelectedLang] = useState("English");
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  return (
    <div
      className="sticky top-0 z-40 px-4 py-3"
      style={{
        background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 60%, #388E3C 100%)",
        boxShadow: "0 2px 20px rgba(27,94,32,0.3)",
      }}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div
            className="flex items-center justify-center rounded-xl"
            style={{ width: 36, height: 36, background: "rgba(255,255,255,0.18)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8 2 4 5 4 9c0 5 5 9 8 11 3-2 8-6 8-11 0-4-4-7-8-7z" fill="#A5D6A7" />
              <circle cx="12" cy="9" r="2" fill="#fff" />
              <path d="M9 14h6M10 17h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div style={{ color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: 1.1 }}>
              KrishiAI
            </div>
            {title && (
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11 }}>{title}</div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <Globe size={13} color="#fff" />
              <span style={{ color: "#fff", fontSize: 11, fontWeight: 600 }}>{selectedLang.slice(0, 3)}</span>
              <ChevronDown size={11} color="#fff" />
            </button>
            <AnimatePresence>
              {showLangDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
}
