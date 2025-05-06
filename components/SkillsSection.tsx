
const SkillsSection = () => {
  const frontendSkills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 
    'Next.js', 'Tailwind CSS', 'Redux', 'Styled Components'
  ];
  
  const toolsSkills = [
    'Git & GitHub', 'Webpack', 'Vite', 'npm/yarn', 
    'Figma', 'Jest', 'React Testing Library', 'Lighthouse', 'Chrome DevTools'
  ];
  
  const otherSkills = [
    'Responsive Design', 'UI/UX Design', 'Accessibility (a11y)', 'SEO', 
    'Performance Optimization', 'PWAs', 'REST APIs', 'GraphQL'
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I focus on using modern technologies to build robust and scalable frontend applications. 
            Here are some technologies I've been working with recently:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">Frontend Development</h3>
            <div className="flex flex-wrap justify-center">
              {frontendSkills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">Tools & Environments</h3>
            <div className="flex flex-wrap justify-center">
              {toolsSkills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">Other Skills</h3>
            <div className="flex flex-wrap justify-center">
              {otherSkills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
