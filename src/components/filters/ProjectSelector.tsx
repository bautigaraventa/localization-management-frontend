"use client";

import { mockedProjects } from "@/lib/mocks";
import { useTranslationStore } from "@/store/translationStore";

export function ProjectSelector() {
  const { selectedProject, setSelectedProject } = useTranslationStore();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3 text-stone-700 dark:text-stone-300">
        Projects
      </h2>
      <select
        className="p-2 text-sm rounded border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800"
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}
      >
        {mockedProjects.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  );
}
