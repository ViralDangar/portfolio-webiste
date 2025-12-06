const skills = {
  "Programming": ["Python", "JavaScript", "TypeScript", "Node.js", "React", "Express.js"],
  "AI/ML Tools": ["LangChain", "LangGraph", "AWS Bedrock", "RAG Systems", "Multi-Agent Systems"],
  "Automation": ["n8n", "Workflow Design", "Process Automation", "Celery"],
  "Backend": ["FastAPI", "Django", "Redis", "Docker", "Microservices"],
  "Databases": ["MongoDB", "PostgreSQL", "Pinecone", "Vector DBs"],
  "DevOps & Cloud": ["AWS", "CI/CD", "Containerization", "API Integration"],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative bg-secondary/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-card p-6 hover-glow transition-all duration-300">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4 border-b border-border/50 pb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Showcase */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Data Pipelines", "Event-Driven Systems", "Async Architecture", "Custom Tools", "Enterprise Solutions"].map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium hover:bg-primary/20 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
