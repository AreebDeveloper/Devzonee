import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Smartphone, Globe, Zap, Users, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CodeAnimation from "@/components/CodeAnimation";
import AnimatedGlobe from "@/components/AnimatedGlobe";
import heroBg from "@/assets/hero-bg.jpg";
import OrbitServices from "@/components/OrbitServices";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const GlossShine = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      <div className="absolute -inset-[100%] animate-[shine_6s_linear_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};


const services = [
  { icon: Code2, title: "Web Development", desc: "Full-stack MERN applications built for performance and scale." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile solutions with React Native." },
  { icon: Users, title: "UI/UX Design", desc: "User-centered design that converts and delights." },
  { icon: Shield, title: "Social Media Marketing", desc: "Strategic use of social platforms to engage audiences and drive growth." },
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "5+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "9+", label: "Team Members" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6"
              >
                MERN Stack Experts
              </motion.span>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
                We Build{" "}
                <span className="text-gradient glow-text">Digital</span>
                <br />
                Experiences
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                A full-service software house specializing in MongoDB, Express, React & Node.js.
                We turn your vision into scalable, beautiful products.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105"
                >
                  View Our Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-all duration-300"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>

            {/* Right - Globe + Code */}
            <div className="hidden lg:flex flex-col items-center relative">
              <AnimatedGlobe />
              <div className="absolute -bottom-8 -left-4 right-0 w-[90%]">
                <CodeAnimation />
              </div>
            </div>
          </div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
      </section>

      {/* Stats */}
      <section className="section-padding border-y border-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="End-to-end software solutions powered by cutting-edge JavaScript technologies."
          />

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ===== TIMELINE SERVICES ===== */}
            <div className="relative">

              {/* Vertical Line */}
              <div className="absolute left-5 top-0 w-[2px] h-full bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

              <div className="space-y-12">

                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="relative pl-16"
                  >

                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2 flex items-center justify-center">

                      {/* Glow */}
                      <div className="absolute w-5 h-5 rounded-full bg-primary/40 blur-md" />

                      {/* Dot */}
                      <div className="relative w-4 h-4 rounded-full bg-primary border border-primary/30" />

                    </div>

                    {/* Service Content */}
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group glass-hover rounded-2xl p-6"
                    >

                      <div className="flex items-start gap-4">

                        {/* Icon */}
                        <div className="relative w-11 h-11 flex items-center justify-center mb-4">

                          {/* Glow */}
                          <div className="absolute inset-0 rounded-lg bg-primary/30 blur-lg opacity-0 group-hover:opacity-70 transition duration-500" />


                          {/* Icon container */}
                          <div className="relative w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-md">
                            <service.icon size={20} className="text-primary" />
                          </div>

                        </div>


                        {/* Text */}
                        <div>
                          <h3 className="relative font-display text-lg font-semibold mb-2 inline-block">

                            {/* Text Glow */}
                            <span className="absolute inset-0 bg-primary/30 blur-md opacity-0 group-hover:opacity-70 transition duration-500" />

                            <span className="relative text-foreground">
                              {service.title}
                            </span>

                          </h3>


                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.desc}
                          </p>
                        </div>

                      </div>

                    </motion.div>
                  </motion.div>
                ))}

              </div>
            </div>

            {/* ===== ORBIT VISUAL ===== */}
            <div className="sticky top-32 flex justify-center">
              <OrbitServices />
            </div>

          </div>

        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                Ready to Build Something{" "}
                <span className="text-gradient">Amazing</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Let's discuss your project and create a solution that drives results.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105"
              >
                Let's Talk
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
