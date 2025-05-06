
import { User, Code, Book } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <User className="text-primary" />
              About Me
            </h2>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Hello! I'm Aditya Sirsat, a passionate frontend developer based in India. I specialize in creating engaging and user-friendly web experiences, combining technical expertise with creative problem-solving.I am also bug hunter who enjoys finding and reporting security vulnerabilities in web applications
            </p>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a self-taught developer with a background in design, which gives me a unique approach to developing beautiful and functional interfaces. I focus on writing clean, elegant and efficient code.
            </p>
            
            <p className="text-foreground font-medium">
              When I'm not coding, you'll find me hiking in the mountains, reading sci-fi novels, or exploring new coffee shops in the city.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 gap-6">
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Code className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                    <p className="text-muted-foreground">
                      I love building web applications using modern technologies like React, Next.js, and TypeScript. I'm passionate about creating responsive, accessible, and performant web experiences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Book className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      The tech field evolves rapidly, and I'm committed to staying up-to-date with the latest technologies and best practices. I regularly participate in online courses, workshops, and hackathons.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
