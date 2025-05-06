import { ArrowDownCircle, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 pb-20 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="section-fade section-fade-delay-1">
              <p className="text-lg mb-3 text-muted-foreground">Hi there, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="block">Aditya Sirsat</span>
                <span className="highlight-text">Frontend Developer and bug hunter</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                I craft responsive websites where technology meets creativity. Passionate about building excellent software that improves the lives of those around me.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  View Work
                </a>
                <a 
                  href="/aditya resume.pdf" 
                  download
                  className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center section-fade section-fade-delay-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/30 flex items-center justify-center">
                    <img 
                      src="/my-photo.jpg" 
                      alt="Developer" 
                      className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-background"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="text-primary" size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
