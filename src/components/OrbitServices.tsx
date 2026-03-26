import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Cloud, Brain, Server } from "lucide-react";

const orbitItems = [
  { icon: Code, label: "Web Development" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Cloud, label: "Cloud Solutions" },
  { icon: Brain, label: "AI Solutions" },
  { icon: Server, label: "Backend Systems" },
];

const radius = 150; // orbit size

export default function OrbitServices() {
  return (
    <div className="relative w-[350px] h-[350px] flex items-center justify-center">

      {/* Center Logo / Text */}
      <div className="absolute w-32 h-32 rounded-full glass flex items-center justify-center text-center font-display font-semibold text-lg text-primary">
        Devzone
      </div>

      {/* Orbit Items */}
      {orbitItems.map((item, index) => {
        const angle = (index / orbitItems.length) * 360;

        return (
          <motion.div
            key={item.label}
            className="absolute"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
              }}
              whileHover={{ scale: 1.15 }}
              className="glass-hover w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer shadow-lg"
            >
              <item.icon className="text-primary" size={22} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
