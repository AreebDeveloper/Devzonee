import { motion } from "framer-motion";
import { Target, Eye, Award, Coffee, Rocket, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ua from '../assets/ua.jpeg'
import hr from '../assets/hr.jpeg'
import ag from '../assets/ag.jpeg'
import aa from '../assets/aa.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const team = [
  { name: "SHEIKH Usman Arshad", role: "CEO & Founder", avatar: ua },
  { name: "Hassan raza", role: " co founder and manager", avatar: hr },
  { name: "Abdul ahad", role: "mern stack developer", avatar: aa },
  { name: "Areeb Gohar", role: "mern stack developer", avatar: ag },
];

const values = [
  { icon: Rocket, title: "Innovation", desc: "We stay ahead with the latest tech." },
  { icon: Heart, title: "Passion", desc: "Every line of code is crafted with care." },
  { icon: Award, title: "Quality", desc: "We ship only what we're proud of." },
  { icon: Coffee, title: "Dedication", desc: "Committed to your success, always." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              We're a Team of{" "}
              <span className="text-gradient">Builders</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2020, Devzone is a team of passionate developers, designers, and strategists
              building world-class software solutions with the MERN stack. We believe in clean code,
              beautiful design, and relentless innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding border-y border-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Target, title: "Our Mission", text: "To democratize access to premium software development, empowering businesses of all sizes with scalable, modern technology solutions." },
            { icon: Eye, title: "Our Vision", text: "To become the leading MERN stack software house globally, recognized for innovation, reliability, and transformative digital products." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-hover rounded-2xl p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Core Values" title="What Drives Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-hover rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                  <val.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{val.title}</h4>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Our Team" title="Meet the Experts" description="A diverse team united by a shared passion for exceptional software." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-hover rounded-2xl p-8 text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-5 group-hover:border-primary/60 transition-all duration-500 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
