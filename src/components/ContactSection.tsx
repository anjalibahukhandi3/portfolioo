import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Github, Linkedin, Twitter, Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Let's discuss your next project",
      action: "mailto:anjali.bahukhandi2005@gmail.com",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      description: "Explore my code and contributions",
      action: "https://github.com/anjalibahukhandi3",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Connect professionally",
      action: "https://www.linkedin.com/in/anjali-bahukhandi-24b45b248/",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: "Twitter",
      description: "Follow my tech journey",
      action: "https://x.com/b3_anjalilo",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Virtual Coffee",
      description: "Schedule a casual chat",
      action: "https://studio.buymeacoffee.com/my-account/edit-profile",
    },
  ];

  return (
    <section id="contact-section" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/20">
            <Send className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next Android project? Let's discuss how we can 
            bring your ideas to life with cutting-edge mobile solutions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card
                className="pro-card cursor-pointer hover-glow hover-scale animate-fade-in transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-xl bg-muted/50 border border-border flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-primary">
                    {method.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <p className="text-sm font-medium text-primary break-all">
                    {method.action.replace("mailto:", "")}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Call to Action Card */}
        <Card className="pro-card-gradient text-center p-12 hover-glow animate-scale-in transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="space-y-8">
            <div className="flex justify-center space-x-4 text-5xl">
              <span className="animate-bounce">🚀</span>
              <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>💡</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>⚡</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-heading font-bold text-primary">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Whether it's a complex Android application, automation workflow, or an innovative 
                tech solution—I'm excited to collaborate and create something extraordinary together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:anjali.bahukhandi2005@gmail.com">
                <Button className="btn-pro group text-lg px-8 py-4">
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Start a Project
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="mailto:anjali.bahukhandi2005@gmail.com">
                <Button variant="outline" className="btn-outline-pro text-lg px-8 py-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Just Say Hi
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
