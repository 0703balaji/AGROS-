import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import {
  User, MapPin, ShoppingBag, Users, BookOpen, Bookmark,
  Settings, Bell, LogOut, ChevronRight, Leaf, TrendingUp,
  Award, CreditCard
} from "lucide-react";

const MENU_SECTIONS = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Profile Settings", path: "/profile", desc: "Manage your account" },
      { icon: MapPin, label: "My Fields", path: "/fields", desc: "3 fields registered" },
      { icon: Award, label: "Achievements", path: "/achievements", desc: "View your progress" },
    ]
  },
  {
    title: "Marketplace",
    items: [
      { icon: ShoppingBag, label: "My Listings", path: "/listings", desc: "Active products" },
      { icon: CreditCard, label: "Transactions", path: "/transactions", desc: "Sales history" },
      { icon: TrendingUp, label: "Analytics", path: "/analytics", desc: "Performance metrics" },
    ]
  },
  {
    title: "Community",
    items: [
      { icon: Users, label: "My Posts", path: "/community", desc: "Forum activity" },
      { icon: BookOpen, label: "Learning Courses", path: "/knowledge", desc: "Continue learning" },
      { icon: Bookmark, label: "Saved Content", path: "/saved", desc: "Bookmarked items" },
    ]
  },
  {
    title: "System",
    items: [
      { icon: Bell, label: "Notifications", path: "/notifications", desc: "3 unread" },
      { icon: Settings, label: "Settings", path: "/settings", desc: "App preferences" },
    ]
  }
];

export function ProfileMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const userName = "Ravi Kumar";
  const userDistrict = "Thanjavur";

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-xl"
        style={{ width: 34, height: 34, background: "rgba(255,255,255,0.15)" }}
      >
        <User size={16} color="#fff" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
}
