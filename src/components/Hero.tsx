import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, ArrowRight, Code2 } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openGithub = () => {
    window.open('https://github.com/anjalibahukhandi3', '_blank');
  };

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/anjali-bahukhandi-24b45b248/', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:anjali.bahukhandi2005@gmail.com';
  };

  const openTwitter = () => {
    window.open('https://twitter.com/your_twitter_handle', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                  Android Developer
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">
                  Anjali
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl">
                Crafting exceptional mobile experiences with cutting-edge Android development
              </p>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Passionate about building scalable apps, exploring automation with n8n, 
                and finding inspiration in good books.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} className="btn-pro group">
                <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline-pro group">
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <div 
                onClick={openGithub}
                className="p-4 rounded-xl bg-card border border-border hover-glow cursor-pointer group hover-scale transition-all duration-300"
                title="View my GitHub profile"
              >
                <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors group-hover:rotate-12" />
              </div>
              <div 
                onClick={scrollToContact}
                className="p-4 rounded-xl bg-card border border-border hover-glow cursor-pointer group hover-scale transition-all duration-300"
                title="Let's connect on LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors group-hover:scale-110" />
              </div>
              <div 
                onClick={openTwitter}
                className="p-4 rounded-xl bg-card border border-border hover-glow cursor-pointer group hover-scale transition-all duration-300"
                title="Follow me on Twitter"
              >
                <Twitter className="w-6 h-6 text-foreground group-hover:text-primary transition-colors group-hover:scale-110" />
              </div>
              <div 
                onClick={openEmail}
                className="p-4 rounded-xl bg-card border border-border hover-glow cursor-pointer group hover-scale transition-all duration-300"
                title="Send me an email"
              >
                <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors group-hover:animate-pulse" />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative pro-card p-8 hover-glow transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <img
                src={heroImage}
                alt="Anjali - Android Developer"
                className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;