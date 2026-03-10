import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Mic, Camera, Send, Leaf, ChevronLeft, Volume2, Copy, ThumbsUp,
  Sparkles, MoreHorizontal, Image, Loader
} from "lucide-react";
import { MobileLayout } from "../components/MobileLayout";
import { PremiumCard } from "../components/PremiumCard";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  hasImage?: boolean;
  imageUrl?: string;
}

const SUGGESTIONS = [
  "What crops should I grow this season?",
  "Pest on my tomato leaves, how to treat?",
  "Best organic fertilizer for rice?",
  "How to manage waterlogging in fields?",
];

const AI_RESPONSES: Record<string, string> = {
  default: `Namaste! 🙏 I'm KrishiAI, your smart farming assistant.

I can help you with:
• 🌾 Crop selection & recommendations
• 🐛 Pest & disease identification
• 🌱 Soil health & fertilizer advice
• 🌧 Weather-based farming tips
• 📊 District-specific insights

What would you like to know today?`,

  crop: `Based on your location in Thanjavur, Tamil Nadu and the current Kharif season, I recommend:

🌾 **Top Crops for Your District:**

1. **Paddy (IR-64 variety)**
   • Yield: 5-6 tonnes/acre
   • Market price: ₹2,183/quintal
   • Pest risk: Medium (Fall Armyworm alert)

2. **Black-eyed Peas**
   • Excellent for soil nitrogen fixation
   • Water-efficient crop
   • Good inter-cropping option

3. **Groundnut**
   • High market demand
   • Suitable for red sandy loam soil

**My Recommendation:** Continue with paddy but use pest-resistant varieties like TRY3 or ADT45.

Want me to explain the cultivation schedule? 🌱`,

  pest: `⚠️ Based on your description, this sounds like **Fall Armyworm** (*Spodoptera frugiperda*).

**Identification Signs:**
• Ragged holes in leaves
• Frass (droppings) visible
• Young worms in leaf funnels

**Immediate Action (Organic):**

1. 🌿 **Neem Oil Spray**
   Mix: 5ml neem oil + 1ml soap per liter water
   Apply: Early morning or evening

2. 🦠 **Bt Spray** (Bacillus thuringiensis)
   Apply: 1g per liter water

3. ✂️ Remove and destroy heavily infested plants

4. 🪤 **Pheromone Traps**
   Set 5 traps per acre for monitoring

**Follow-up:** Monitor every 3 days. If damage exceeds 30%, consult your local agricultural officer.

}
