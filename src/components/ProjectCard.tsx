import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  color: "primary" | "secondary" | "accent" | "emerald" | "orange";
  icon: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

const ProjectCard = ({ title, description, tags, color, icon, link, github, featured }: ProjectCardProps) => {
  const tagColorMap = {
    primary: "tech-pill-primary",
    secondary: "tech-pill-secondary", 
    accent: "tech-pill-accent",
    emerald: "tech-pill-emerald",
    orange: "tech-pill-orange"
  };

  return (
    <div className="masonry-item">
      <Card className={`pro-card overflow-hidden group relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${featured ? 'glow-effect' : ''}`}>
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              <Star className="w-3 h-3" />
              Featured
            </div>
          </div>
        )}
        
        <CardHeader className="pb-4 relative">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl p-3 rounded-xl bg-muted/50 border border-border">
                {icon}
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <CardDescription className="text-muted-foreground leading-relaxed text-base">
            {description}
          </CardDescription>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className={`tech-pill ${tagColorMap[color]}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            {github && (
              <Button size="sm" variant="outline" className="btn-outline-pro text-sm">
                <Github className="w-4 h-4 mr-2" />
                Source
              </Button>
            )}
            {link && (
              <Button size="sm" className="btn-pro text-sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;