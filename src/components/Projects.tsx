import projectTaskMgmt from "@/assets/project-task-mgmt.jpg";
import projectAgriMarket from "@/assets/project-agri-market.jpg";
import projectResqconnect from "@/assets/project-resqconnect.jpg";

const projects = [
  {
    number: "01",
    category: "WEB DESIGN · UI/UX",
    title: "Task Management System",
    description: "A web-based task management system with a clean, minimal interface. Improved user workflow with simple task creation, tracking, and responsive design.",
    event: "EVOGEN, Karunya University",
    image: projectTaskMgmt,
    imageFirst: true,
  },
  {
    number: "02",
    category: "WEB PLATFORM · UX RESEARCH",
    title: "Agriculture Marketplace",
    description: "A web platform connecting farmers directly with buyers. Created simple product browsing, clear navigation, and user-friendly interfaces for rural and first-time digital users.",
    event: "ZINNIA'24, GCE College",
    image: projectAgriMarket,
    imageFirst: false,
  },
  {
    number: "03",
    category: "MOBILE APP · UI DESIGN",
    title: "ResQConnect",
    description: "An emergency response mobile app allowing users to request help and volunteer during disasters. Focused on intuitive navigation, usability, and responsive mobile UI.",
    event: "Mobile App Project",
    image: projectResqconnect,
    imageFirst: true,
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

        <div className="space-y-24">
          {projects.map((project) => (
            <div
              key={project.number}
              className={`flex flex-col gap-10 items-center ${
                project.imageFirst ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden bg-muted shadow-[var(--shadow-card)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <p className="text-primary font-body text-xs tracking-[0.25em] uppercase">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-muted-foreground font-body italic pt-2">
                  {project.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
