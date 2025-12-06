import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-2xl font-bold gradient-text">
              VD
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Building intelligent systems & automation workflows
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/viral-dangar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary/50 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary/50 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:viraldangar9144@gmail.com"
              className="p-3 bg-secondary/50 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Viral Dangar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
