import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, BookOpen, Zap, Palette, ExternalLink } from "lucide-react";
import readingImage from "@/assets/coder-reader-illustration.svg";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Android Development",
      description: "Kotlin, Java,Clean Architecture",
      color: "tech-pill-primary"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation & APIs",
      description: "n8n workflows, REST APIs, Integration",
      color: "tech-pill-secondary"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Tech books, documentation, courses",
      color: "tech-pill-accent"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Material Design, User Experience",
      color: "tech-pill-emerald"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-secondary/20">
            <span>About Me</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold gradient-text mb-6">
            Anjali Bahukhandi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Android developer passionate about creating scalable mobile solutions 
            and exploring cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <Card className="pro-card p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-primary">
                Professional Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I specialize in Android development with a focus on creating robust, 
                  scalable applications that deliver exceptional user experiences. My journey 
                  spans from AI-powered search platforms to safety-critical applications.
                </p>
                <p>
                  Currently exploring the fascinating world of workflow automation with n8n, 
                  building custom integrations and streamlining complex processes. When not coding, 
                  I find inspiration in books that expand my technical and creative horizons.
                </p>
              </div>
            </Card>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="pro-card group hover-scale animate-fade-in transition-all duration-300 hover:shadow-lg" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-heading font-semibold mb-2 text-foreground">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Organizational Experience */}
            <Card className="pro-card p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-primary">
                Leadership & Community
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-heading font-semibold text-foreground">ACM General head </h4>
                  <p className="text-primary font-medium">Association for Computing Machinery (ACM)</p>
                  <p className="text-sm text-muted-foreground mt-1">Leading SIG Tech team operations and organizing technical events/workshops.</p>
                </div>
                <div className="border-l-4 border-secondary/30 pl-4">
                  <h4 className="font-heading font-semibold text-foreground">TCF Vice President</h4>
                  <p className="text-secondary font-medium">The Coding Foundation (TCF)</p>
                  <p className="text-sm text-muted-foreground mt-1">Contributing to coding education initiatives and community building.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Reading Corner */}
          <div className="relative animate-scale-in">
            <Card className="pro-card-gradient p-8 text-center hover-glow transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-8">
                <img
                  src={readingImage}
                  alt="Reading Corner"
                  className="w-56 h-56 mx-auto rounded-xl object-cover border border-border"
                />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Reading Corner
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "The more that you read, the more things you will know. 
                The more that you learn, the more places you'll go."
              </p>
              <div className="flex justify-center gap-3 mb-6">
                <span className="tech-pill tech-pill-orange">Classic literature</span>
                <span className="tech-pill tech-pill-accent">Tech Books</span>
                <span className="tech-pill tech-pill-secondary">Self-Development</span>
              </div>
              <a 
                href="https://medium.com/@anjali.bahukhandi2005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  variant="outline" 
                  className="btn-outline-pro group hover-glow transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Read My Articles
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;