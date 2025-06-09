"use client";

import { mockedProjects } from "@/lib/mocks";
import { useTranslationStore } from "@/store/translationStore";
import { GenericSelector } from "./GenericSelector";

export function ProjectSelector() {
  const { selectedProject, setSelectedProject } = useTranslationStore();

  return (
    <GenericSelector
      label="Project"
      value={selectedProject}
      onChange={setSelectedProject}
      options={[
        { value: "all", label: "All" },
        ...mockedProjects.map((p) => ({ value: p.id, label: p.name })),
      ]}
      placeholder="Select a project"
    />
  );
}
