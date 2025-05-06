import { Github, Link } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce analytics with real-time data visualization, user management, and inventory tracking.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A modern task management application with drag-and-drop functionality, task categorization, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Next.js", "TypeScript", "Styled Components", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description: "A weather application that provides detailed forecasts, location search, and interactive maps with responsive design.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["React", "JavaScript", "CSS3", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is built with a focus on solving real-world problems with elegant solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden border border-border/50">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex mt-auto pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-sm w-full"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 justify-center">
                      <Github size={16} />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={18} />
              See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
