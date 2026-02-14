type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="project-card">

      {/* HEADER */}
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-semibold">
          {title}
        </h4>

        <div className="flex gap-3 text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              className="hover:text-teal-400"
            >
              GitHub ↗
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="hover:text-teal-400"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-slate-400 mb-4 leading-relaxed">
        {description}
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
