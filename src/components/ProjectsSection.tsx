import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Perplexity Clone",
      description: "An AI-powered search and answer platform with real-time search capabilities, natural language processing, and a sleek modern interface. Built with advanced Android architecture patterns for optimal performance.",
      tags: ["Android", "Kotlin", "AI/ML", "MVVM", "Retrofit", "Room"],
      color: "primary" as const,
      icon: "🔍",
      github: "#",
      link: "#",
      featured: true
    },
    {
      title: "HerWay - Women Safety",
      description: "A comprehensive women safety application featuring real-time location sharing, SOS alerts, emergency contacts, and community support. Making digital spaces safer through technology.",
      tags: ["Android", "Kotlin", "GPS", "Firebase", "Real-time DB"],
      color: "secondary" as const,
      icon: "🛡️",
      github: "#",
      link: "#",
      featured: true
    },
    {
      title: "Blinkit Clone",
      description: "A feature-rich quick commerce application with instant delivery tracking, real-time inventory management, seamless checkout, and payment gateway integration.",
      tags: ["Android", "Kotlin", "Maps API", "Payment SDK", "Coroutines"],
      color: "accent" as const,
      icon: "🛒",
      github: "#"
    },
    {
      title: "n8n Automation Learning",
      description: "Exploring the world of workflow automation with n8n. Building custom nodes, creating complex automated workflows, and integrating multiple services seamlessly.",
      tags: ["n8n", "Automation", "APIs", "Webhooks", "JavaScript"],
      color: "emerald" as const,
      icon: "⚡",
    },
    {
      title: "AI Study Buddy",
      description: "Built a cross-platform Flutter app that uses AI to assist students with subject-specific doubts. Integrated OpenAI's GPT model for generating answers and explanations based on user queries. Supports bookmarking, voice input, and offline history caching.",
      tags: ["Flutter", "OpenAI API", "GPT", "Voice Input", "Cross-platform"],
      color: "orange" as const,
      icon: "🤖",
      github: "#"
    },
    {
      title: "Reading Companion",
      description: "A personal reading tracker with book reviews, reading goals, progress analytics, and a beautiful interface for book lovers. Because every reader needs a digital companion.",
      tags: ["Android", "SQLite", "Material Design", "Data Viz"],
      color: "emerald" as const,
      icon: "📚",
      github: "#"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <span>Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold gradient-text mb-6">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in Android development, 
            from AI-powered applications to safety-focused solutions.
          </p>
        </div>

        <div className="masonry-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in hover-scale" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;