import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axiosInstance , { BASE_URL } from "@/Connection/Api";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};



const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosInstance.get("/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
              Our Work
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Projects That{" "}
              <span className="text-gradient">Speak</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A showcase of solutions we've built for startups, enterprises, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
  <motion.div
    key={project._id}
    custom={i}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="group glass-hover rounded-2xl overflow-hidden"
  >

    {/* IMAGE BANNER */}
    <div className="h-48 relative overflow-hidden">

      {/* Project Image */}
      {project.image && (
        <img
           src={`${BASE_URL}/uploads/${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
        <div className="flex gap-3">

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ExternalLink size={18} />
            </a>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Github size={18} />
            </a>
          )}

        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="p-8">
      <span className="text-xs font-semibold tracking-wider uppercase text-primary">
        {project.category}
      </span>

      <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {project.desc}
      </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2">
        {project.tech?.map((t, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border/50"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

  </motion.div>
))}

        </div>
      </section>
    </Layout>
  );
};

export default Projects;
