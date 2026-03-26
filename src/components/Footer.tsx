import { Link } from "react-router-dom";
import {Linkedin, Instagram, Facebook } from "lucide-react";
import logo from '../assets/Logo.webp'

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, link: "https://www.linkedin.com/company/devzone-software/" },
    { icon: Instagram, link: "https://www.instagram.com/devzone.official?utm_source=qr&igsh=MXN6aHpnOGpsa2R1" },
    { icon: Facebook, link: "https://www.facebook.com/profile.php?id=61580950001217" },
  ];
  return (
    <footer className="border-t border-border/30 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">

              <span className="font-display font-bold text-xl text-foreground"><img src={logo} alt="" className="w-[220px]" /></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              We craft exceptional digital experiences using the MERN stack. From concept to deployment, we build software that scales.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-3">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Social Media Marketing"].map((item) => (
                <span key={item} className="block text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Devzone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
