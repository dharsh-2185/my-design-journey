import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";
import dharshiniPhoto from "@/assets/dharshini-photo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase">
              UI/UX Designer · Web Developer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[0.95] tracking-tight text-foreground">
              Dharshini
              <span className="block text-gradient">A.</span>
            </h1>
          </div>
          <p className="text-muted-foreground font-body text-lg max-w-md leading-relaxed">
            A curious and creative learner crafting intuitive digital experiences through thoughtful design solutions.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground font-body">
            <a href="mailto:dharshinipersonal21@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> dharshinipersonal21@gmail.com
            </a>
            <a href="mailto:dharshini.se22@bitsathy.ac.in" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> dharshini.se22@bitsathy.ac.in
            </a>
            <a href="tel:+918248479419" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +91 8248479419
            </a>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-medium hover:opacity-90 transition-opacity">
              View Projects
            </a>
            <a href="/Dharshini_Resume.pdf" download className="border border-foreground/20 text-foreground px-8 py-3 rounded-full font-body font-medium hover:bg-foreground/5 transition-colors flex items-center gap-2">
              <ArrowDown size={16} /> Download Resume
            </a>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent overflow-hidden border-4 border-primary/10">
              <img 
                src={dharshiniPhoto} 
                alt="Dharshini A" 
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card px-6 py-3 rounded-full shadow-[var(--shadow-card)] font-body text-sm font-medium text-foreground">
              B.E ISE · 2022-2026
            </div>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
