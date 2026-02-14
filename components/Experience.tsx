import Xp from "./Xp"; 

const experiences = [
  {
    date: "May – Aug 2025",
    company: "Hexagon",
    title: "Smart 3Dx Application Development Intern",
    description:
      "Built automated performance testing tools in C#/.NET for Smart 3Dx, integrated CI/CD pipelines with Azure DevOps and Jenkins, and collaborated with engineering teams to improve reliability and developer workflows.",
    tags: ["C#", ".NET", "SQL Server", "Azure DevOps", "Jenkins", "CI/CD"],
    link: "https://hexagon.com",
  },
  {
    date: "2024 – 2025",
    company: "Karura - University Rover Challenge",
    title: "Full-Stack Developer",
    description:
      "Developed web dashboards and control interfaces for autonomous rover systems, integrated real-time telemetry, and worked with robotics and perception teams to support competition operations.",
    tags: ["ROS", "OpenCV", "PyQt5"],
    link: "https://urc.marssociety.org",
  },
];

export default function Experience() {
  return (
    <div id = "experience">
      <h3 className="text-3xl font-bold pt-20">
        Experience 
        <b></b>
      </h3>
      {experiences.map((x) => (
       <> <Xp key={x.company} {...x} /> <br></br> </>
      ))}
    </div>
  );
}
