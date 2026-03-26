import { motion } from "framer-motion";

const AnimatedGlobe = () => {
  // Generate random dots for globe surface
  const dots = Array.from({ length: 80 }, (_, i) => {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = 2 * Math.PI * Math.random();
    const x = 50 + 40 * Math.sin(phi) * Math.cos(theta);
    const y = 50 + 40 * Math.sin(phi) * Math.sin(theta);
    const z = Math.cos(phi);
    return { x, y, z, delay: i * 0.03 };
  });

  // Connection lines between "cities"
  const connections = [
    { x1: 30, y1: 35, x2: 65, y2: 45 },
    { x1: 45, y1: 25, x2: 70, y2: 60 },
    { x1: 20, y1: 55, x2: 55, y2: 30 },
    { x1: 60, y1: 70, x2: 35, y2: 40 },
    { x1: 50, y1: 20, x2: 25, y2: 65 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative w-full aspect-square max-w-[400px]"
    >
      {/* Outer glow ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-primary/20"
        style={{
          background: "radial-gradient(circle, transparent 60%, hsl(var(--primary) / 0.05) 100%)",
        }}
      />

      {/* Orbital ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[10%] rounded-full border border-dashed border-primary/15"
      />

      {/* Orbital ring 2 - tilted */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[5%] rounded-full border border-dashed border-primary/10"
        style={{ transform: "rotateX(60deg)" }}
      />

      {/* Globe body */}
      <div className="absolute inset-[15%] rounded-full overflow-hidden">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle at 35% 35%, hsl(var(--primary) / 0.15), hsl(var(--background)) 70%)`,
            boxShadow: `inset 0 0 60px hsl(var(--primary) / 0.1), 0 0 80px hsl(var(--primary) / 0.08)`,
            border: "1px solid hsl(var(--primary) / 0.2)",
          }}
        >
          {/* Globe SVG with dots and connections */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Grid lines */}
            {[20, 35, 50, 65, 80].map((pos) => (
              <motion.ellipse
                key={`h-${pos}`}
                cx="50"
                cy="50"
                rx="35"
                ry={Math.abs(pos - 50) * 0.6 + 5}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeOpacity={0.12}
                strokeWidth="0.3"
                animate={{ ry: [Math.abs(pos - 50) * 0.6 + 5, Math.abs(pos - 50) * 0.6 + 8, Math.abs(pos - 50) * 0.6 + 5] }}
                transition={{ duration: 4, repeat: Infinity, delay: pos * 0.05 }}
              />
            ))}
            {[25, 40, 55, 70].map((pos) => (
              <motion.ellipse
                key={`v-${pos}`}
                cx="50"
                cy="50"
                rx={Math.abs(pos - 50) * 0.5 + 8}
                ry="35"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeOpacity={0.1}
                strokeWidth="0.3"
              />
            ))}

            {/* Connection lines with animation */}
            {connections.map((conn, i) => (
              <motion.line
                key={i}
                x1={conn.x1}
                y1={conn.y1}
                x2={conn.x2}
                y2={conn.y2}
                stroke="hsl(var(--primary))"
                strokeWidth="0.4"
                strokeOpacity={0.4}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], strokeOpacity: [0, 0.5, 0.5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1.2,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Dots on globe surface */}
            {dots.map((dot, i) => (
              dot.z > -0.2 && (
                <motion.circle
                  key={i}
                  cx={dot.x}
                  cy={dot.y}
                  r={dot.z > 0.5 ? 0.8 : 0.4}
                  fill="hsl(var(--primary))"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: dot.delay,
                  }}
                />
              )
            ))}

            {/* Pulsing "city" nodes */}
            {[
              { cx: 35, cy: 40 },
              { cx: 60, cy: 45 },
              { cx: 45, cy: 30 },
              { cx: 55, cy: 65 },
              { cx: 30, cy: 58 },
            ].map((city, i) => (
              <g key={`city-${i}`}>
                <motion.circle
                  cx={city.cx}
                  cy={city.cy}
                  r="1.2"
                  fill="hsl(var(--primary))"
                  animate={{ r: [1.2, 2, 1.2], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
                <motion.circle
                  cx={city.cx}
                  cy={city.cy}
                  r="3"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.3"
                  animate={{ r: [2, 6], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Orbiting satellite */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
        </div>
      </motion.div>

      {/* Second orbiting dot */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[5%]"
      >
        <div className="absolute bottom-[5%] right-[15%]">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedGlobe;
