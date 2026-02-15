"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

export default function Navbar() {
  const [active, setActive] = useState<SectionId>("about");

  // keep active updated while you scroll the RIGHT panel
  useEffect(() => {
    const root = document.getElementById("right");
    if (!root) return;

    const onScroll = () => {
      const offset = 220; // tweak if you want “active” to switch earlier/later
      const pos = root.scrollTop + offset;

      let current: SectionId = "about";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= pos) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  const jumpTo = (id: SectionId) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActive(id);

    const el = document.getElementById(id);
    if (!el) return;

    // ✅ this will scroll the nearest scrollable parent (#right)
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="mt-[75px] ml-[50px]" aria-label="Section navigation">
      <ul className="flex flex-col gap-6">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;

          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={jumpTo(s.id)}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "group flex items-center gap-4 py-2",
                  "uppercase tracking-[0.22em] text-xs font-semibold",
                  "transition-colors duration-200",
                  isActive ? "text-slate-200" : "text-slate-500 hover:text-slate-200",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-px transition-all duration-200",
                    isActive
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600/50 group-hover:w-16 group-hover:bg-slate-200",
                  ].join(" ")}
                />
                <span>{s.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
