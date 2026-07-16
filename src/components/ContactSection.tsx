import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Linkedin, 
  Twitter, 
  Github,
  Calendar,
  MessageCircle,
  Clock
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lakshitajain659@gmail.com",
      href: "mailto:lakshitajain659@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 96644 79038",
      href: "tel:+919664479038"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Udaipur, Rajasthan, India",
      href: "#"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const services = [
    "UI/UX Design",
    "Product Strategy",
    "Design Systems",
    "User Research",
    "Prototyping",
    "Consultation"
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            <span className="text-cosmic glow-cosmic">Launch</span> <span className="text-nebula">Your Project</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-space max-w-3xl mx-auto">
            Ready to embark on a design journey? Let's connect and create something 
            extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-cosmic">
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-cosmic rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-orbitron font-semibold text-lg sm:text-xl md:text-2xl text-foreground">
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-card/50 border-border/50 focus:border-primary/50"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-card/50 border-border/50 focus:border-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-card/50 border-border/50 focus:border-primary/50"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-card/50 border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-cosmic w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="card-planet">
              <div className="p-6">
                <h3 className="font-orbitron font-semibold text-xl mb-6 text-primary">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-card/30 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-nebula rounded-full flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-space text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-border/30">
                  <h4 className="font-space font-medium text-sm mb-4 text-muted-foreground">
                    Follow me
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-card/50 hover:bg-gradient-cosmic rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground hover:text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Services */}
            <Card className="card-planet">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-accent" />
                  <h3 className="font-orbitron font-semibold text-lg text-foreground">
                    Services Available
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-primary/20 text-primary hover:bg-primary/10"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-cosmic/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground font-space">
                    💫 <strong>Currently accepting new projects</strong> - 
                    Let's discuss your vision and bring it to life!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;