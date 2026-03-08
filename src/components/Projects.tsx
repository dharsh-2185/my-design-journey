import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Task Management System",
    description: "Developed a web-based task management system with a clean and minimal interface. Improved user workflow with simple task creation, tracking, and responsive design.",
    tags: ["UI/UX Design", "Web Development", "Responsive"],
    event: "EVOGEN, Karunya University",
  },
  {
    number: "02",
    title: "Agriculture Marketplace",
    description: "Designed a web platform connecting farmers directly with buyers. Created simple product browsing, clear navigation, and user-friendly interfaces suitable for rural and first-time digital users.",
    tags: ["UX Research", "Accessibility", "Web Platform"],
    event: "ZINNIA'24, GCE College",
  },
  {
    number: "03",
    title: "ResQConnect",
    description: "Designed a user-friendly emergency response mobile app that allows users to request help and volunteer during disasters. Focused on intuitive navigation, usability, and responsive mobile UI design.",
    tags: ["Mobile UI", "App Design", "Emergency UX"],
    event: "Mobile App Project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Projects</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-16 leading-tight">
          Selected <span className="text-gradient">work</span>
        </h2>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group border border-border rounded-2xl p-8 md:p-12 hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <span className="text-5xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {project.number}
                </span>
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <ArrowUpRight size={24} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-body text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground font-body italic">{project.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
