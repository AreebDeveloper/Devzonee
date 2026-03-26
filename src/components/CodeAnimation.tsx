import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const codeLines = [
  { indent: 0, text: 'const app = express();', color: 'text-primary' },
  { indent: 0, text: '', color: '' },
  { indent: 0, text: 'app.use(cors());', color: 'text-muted-foreground' },
  { indent: 0, text: 'app.use(express.json());', color: 'text-muted-foreground' },
  { indent: 0, text: '', color: '' },
  { indent: 0, text: 'mongoose.connect(MONGO_URI)', color: 'text-emerald-400' },
  { indent: 1, text: '.then(() => console.log("DB connected"))', color: 'text-emerald-400' },
  { indent: 1, text: '.catch(err => console.error(err));', color: 'text-destructive' },
  { indent: 0, text: '', color: '' },
  { indent: 0, text: 'app.get("/api/projects", async (req, res) => {', color: 'text-primary' },
  { indent: 1, text: 'const projects = await Project.find();', color: 'text-foreground' },
  { indent: 1, text: 'res.json({ success: true, data: projects });', color: 'text-foreground' },
  { indent: 0, text: '});', color: 'text-primary' },
  { indent: 0, text: '', color: '' },
  { indent: 0, text: 'app.listen(3000, () => {', color: 'text-primary' },
  { indent: 1, text: 'console.log("🚀 Server running on port 3000");', color: 'text-amber-400' },
  { indent: 0, text: '});', color: 'text-primary' },
];

const CodeAnimation = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          // Reset after a pause
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="glass rounded-2xl overflow-hidden border border-border/50 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.15)]"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-card/80">
        <div className="w-3 h-3 rounded-full bg-destructive/70" />
        <div className="w-3 h-3 rounded-full bg-[hsl(45,80%,55%)]/70" />
        <div className="w-3 h-3 rounded-full bg-primary/70" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">server.js</span>
      </div>

      {/* Code area */}
      <div className="p-5 font-mono text-xs md:text-sm leading-6 min-h-[320px] overflow-hidden">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: i < visibleLines ? 1 : 0,
              x: i < visibleLines ? 0 : -10,
            }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            <span className="text-muted-foreground/40 w-6 text-right mr-4 select-none">
              {i + 1}
            </span>
            <span
              className={line.color || 'text-foreground'}
              style={{ paddingLeft: `${line.indent * 20}px` }}
            >
              {line.text}
              {i === visibleLines - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle"
                />
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CodeAnimation;
