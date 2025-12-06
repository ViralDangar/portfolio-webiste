import { Bot, Workflow, Server, Brain } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbot Development",
    description: "Building intelligent chatbots for email, SMS, WhatsApp, and voice automation with multi-channel conversational engines.",
  },
  {
    icon: Workflow,
    title: "Automation Workflows (n8n)",
    description: "Sales and lead automation, custom workflow pipelines, and enterprise process automation using n8n and custom solutions.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable APIs using FastAPI, Django, Node.js with event-driven systems and async microservices architecture.",
  },
  {
    icon: Brain,
    title: "AI/ML Integrations",
    description: "Agentic workflows, RAG-based intelligence, custom tools, and multi-agent execution systems for intelligent applications.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Services</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            What I Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 hover-glow transition-all duration-500 hover:border-primary/50"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="text-primary" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
