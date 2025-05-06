import { Mail, Phone, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real application, you would send this data to your backend or email service
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently open for freelance work and job opportunities. Feel free to reach out if you have a question or just want to say hi!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="contact-icon-btn">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:aditya.sirsat@example.com" className="font-medium text-primary hover:underline">
                      aditya.sirsat@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="contact-icon-btn">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+11234567890" className="font-medium text-primary hover:underline">
                      +91 7499029914
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="contact-icon-btn">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Pune , Maharashtra , India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">Connect with me</h4>
                <div className="flex gap-3">
                  <a href="https://github.com/AdityaS108" className="contact-icon-btn" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/aditya-sirsat-45420b254/" className="contact-icon-btn" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="contact-icon-btn" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Aditya Sirsat"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="aditya@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
