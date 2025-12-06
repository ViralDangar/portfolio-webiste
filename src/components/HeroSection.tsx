import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border/50 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for work</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Hi, I'm{" "}
              <span className="gradient-text">Viral Dangar</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Software Developer | Python, MERN, AI/ML & Automation Engineer
            </p>

            <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Building intelligent systems, automation workflows, and scalable backend solutions with 2.6+ years of experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover-glow"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-secondary border border-border/50 text-foreground rounded-full font-semibold hover:border-primary/50 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://linkedin.com/in/viral-dangar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:viraldangar9144@gmail.com"
                className="p-3 bg-secondary/50 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent p-1">
                <div className="w-full h-full rounded-full bg-secondary/50 flex items-center justify-center overflow-hidden border-2 border-border/50">
                  <img 
                    src={profilePhoto} 
                    alt="Viral Dangar - Software Developer" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 px-6 py-3 glass-card">
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="text-2xl font-display font-bold text-foreground">2.6+ Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">Scroll down</span>
          <ArrowDown size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
