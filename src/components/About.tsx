const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
              Designing with <br />
              <span className="text-gradient">empathy & purpose</span>
            </h2>
          </div>
          <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-lg">
            <p>
              A curious and creative learner with a keen interest in UI/UX design and building intuitive digital experiences. Passionate about understanding user behavior, designing clean interfaces, and improving usability through thoughtful design solutions.
            </p>
            <p>
              Always eager to learn new technologies, explore creative ideas, and enhance skills through hands-on projects and continuous learning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "3+", label: "Projects" },
            { number: "2", label: "Internships" },
            { number: "7.5", label: "CGPA" },
            { number: "92%", label: "SSLC Score" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-display font-bold text-gradient">{stat.number}</p>
              <p className="text-muted-foreground font-body mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
