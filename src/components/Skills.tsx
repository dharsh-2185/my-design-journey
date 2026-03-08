import { Figma, Palette, Code, Users } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "Design",
    items: ["Wireframing", "User Flow Design", "Prototyping", "Usability Principles", "Responsive Design"],
  },
  {
    icon: Figma,
    title: "Tools",
    items: ["Figma", "Canva", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    icon: Code,
    title: "Technical",
    items: ["C", "C++", "Java", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Communication", "Team Collaboration", "Time Management"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Skills</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-16 leading-tight">
          What I <span className="text-gradient">bring</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-card rounded-2xl p-8 hover:shadow-[var(--shadow-card)] transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground font-body text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
