import { Mail, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Get in Touch</p>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
          Let's create something <br />
          <span className="text-gradient">beautiful together</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-lg mx-auto mb-12">
          I'm always open to new opportunities, collaborations, and conversations about design.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
          <a href="mailto:dharshinipersonal21@gmail.com" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
            <Mail size={18} /> dharshinipersonal21@gmail.com
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a href="mailto:dharshini.se22@bitsathy.ac.in" className="border border-foreground/20 text-foreground px-8 py-4 rounded-full font-body font-medium hover:bg-foreground/5 transition-colors flex items-center gap-2">
            <Mail size={18} /> dharshini.se22@bitsathy.ac.in
          </a>
          <a href="tel:+918248479419" className="border border-foreground/20 text-foreground px-8 py-4 rounded-full font-body font-medium hover:bg-foreground/5 transition-colors flex items-center gap-2">
            <Phone size={18} /> Call Me
          </a>
        </div>

        <a href="/Dharshini_Resume.pdf" download className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-body font-medium hover:opacity-90 transition-opacity mb-16">
          <Download size={18} /> Download Resume
        </a>

        <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm">
          <MapPin size={16} />
          <span>Nerinjipettai, Erode, Tamil Nadu</span>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex items-center justify-center">
        <p className="font-display text-xl font-bold text-foreground">Dharshini<span className="text-gradient"> A.</span></p>
      </div>
    </section>
  );
};

export default Contact;
