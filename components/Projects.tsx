import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="space-y-10">

      {/* SECTION TITLE */}
      <h3 className="text-3xl font-bold pt-20">
        Projects
      </h3>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* VALINX */}
        <ProjectCard
          title="ValinX"
          description="AI-powered system log analysis platform using anomaly detection and retrieval-augmented generation. Built to help engineers diagnose failures and performance issues at scale."
          tags={[
            "Python",
            "LangChain",
            "RAG",
            "Isolation Forest",
            "Autoencoders",
            "Docker",
            "PostgreSQL",
          ]}
          github="https://github.com/yourusername/valinx"
        />

        {/* PROJECT ARGUS */}
        <ProjectCard
          title="Project Argus"
          description="Multi-agent reinforcement learning drone search-and-rescue system using AirSim simulation and YOLO-based victim detection for coordinated exploration."
          tags={[
            "Python",
            "PyTorch",
            "Reinforcement Learning",
            "AirSim",
            "YOLO",
            "PettingZoo",
            "MAPPO",
          ]}
          github="https://github.com/yourusername/project-argus"
        />

        {/* SHARETEA POS */}
        <ProjectCard
          title="ShareTea POS System"
          description="Full-stack point-of-sale and management platform with cashier, manager, and customer kiosk interfaces. Includes reporting dashboards and cloud-hosted backend."
          tags={[
            "Next.js",
            "TypeScript",
            "React",
            "Node.js",
            "PostgreSQL",
            "AWS",
            "Tailwind",
          ]}
          github="https://github.com/yourusername/sharetea-pos"
        />

      </div>
    </section>
  );
}
