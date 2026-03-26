import { motion } from "framer-motion";

const SectionHeading = ({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
      {label}
    </span>
    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
