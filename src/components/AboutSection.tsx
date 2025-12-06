import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Know Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <div className="glass-card p-8 md:p-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My name is <span className="text-foreground font-semibold">Viral Dangar</span>, and I am a software developer with more than 2.6 years of experience at Texple Technologies. I have strong expertise in <span className="text-primary">Python, MERN stack, AI/ML, and n8n workflow automation</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I specialize in building intelligent systems that combine cutting-edge AI technologies with robust backend architectures. My passion lies in creating automation solutions that streamline business processes and deliver exceptional value.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">BSc IT</p>
                  <p className="text-sm text-muted-foreground">University of Mumbai, 2023</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Software Developer</p>
                  <p className="text-sm text-muted-foreground">Texple Technologies (June 2023 – Present)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Mumbai, India</p>
                  <p className="text-sm text-muted-foreground">Open to remote opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "2.6+", label: "Years Experience" },
              { value: "10+", label: "Projects Completed" },
              { value: "2+", label: "Enterprise Clients" },
              { value: "150+", label: "Automated Actions" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center hover-glow transition-all duration-300"
              >
                <p className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
