import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Experience & Education</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-16 leading-tight">
          My <span className="text-gradient">journey</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Internships */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">Internships</h3>
            </div>
            <div className="space-y-6">
              {[
                {
                  role: "Web Development Intern",
                  company: "Octanet Services Pvt. Ltd.",
                  desc: "Built responsive, dynamic websites optimizing performance and UX.",
                },
                {
                  role: "UI/UX Design Intern",
                  company: "Codsoft",
                  desc: "Designed intuitive interfaces and prototypes to enhance user engagement.",
                },
              ].map((item) => (
                <div key={item.role} className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="font-display text-lg font-semibold text-foreground">{item.role}</h4>
                  <p className="text-primary font-body text-sm mt-1">{item.company}</p>
                  <p className="text-muted-foreground font-body text-sm mt-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {[
                { school: "Bannari Amman Institute of Technology", degree: "B.E. Information Science Engineering", score: "CGPA: 7.5", year: "2022 - 2026" },
                { school: "Sree Saravana Niketan MHSS", degree: "HSC", score: "89%", year: "2022" },
                { school: "Sree Saravana Niketan MHSS", degree: "SSLC", score: "92%", year: "2020" },
              ].map((item) => (
                <div key={item.degree} className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="font-display text-lg font-semibold text-foreground">{item.school}</h4>
                  <p className="text-primary font-body text-sm mt-1">{item.degree}</p>
                  <div className="flex justify-between mt-3 text-muted-foreground font-body text-sm">
                    <span>{item.score}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
