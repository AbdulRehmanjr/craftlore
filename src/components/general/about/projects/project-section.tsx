"use client";
import { useState } from "react";
import { PROJECTS } from "~/constants/data";
import { useProject } from "~/hooks/use-project";
import { ProjectCard } from "~/components/general/about/projects/project-card";
import { SectionContainer } from "~/components/common/section-container";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "~/components/ui/select";

export const ProjectSection = () => {
  const { project, setProject } = useProject();
  const [selectedProjectId, setSelectedProjectId] = useState<number>(PROJECTS[0]?.id ?? 0);

  const handleProjectSelect = (value: string) => {
    const numericValue = parseInt(value, 10);
    setSelectedProjectId(numericValue);
    const selectedProject = PROJECTS.find(p => p.id === numericValue);
    if (selectedProject) {
      setProject(selectedProject);
    }
  };

  return (
    <SectionContainer className="col-span-12 mt-12 gap-4">
      {/* Mobile: Only show dropdown */}
      <div className="md:hidden w-full max-w-md mx-auto mb-8">
        <h3 className="text-xl font-medium text-primary mb-2">Select a Project</h3>
        <Select 
          value={selectedProjectId.toString()} 
          onValueChange={handleProjectSelect}
        >
          <SelectTrigger className="w-full bg-white/90 backdrop-blur-sm border-primary">
            <SelectValue placeholder="Choose a project" />
          </SelectTrigger>
          <SelectContent>
            {PROJECTS.map((projectItem) => (
              <SelectItem 
                key={projectItem.id} 
                value={projectItem.id.toString()}
              >
                {projectItem.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Original desktop layout - Hidden on mobile */}
      <div className="relative -mt-36 hidden md:grid grid-cols-4 gap-2 lg:gap-7">
        {PROJECTS.slice(0, 4).map((projectItem) => (
          <ProjectCard
            className="col-span-2 lg:col-span-1"
            title={projectItem.title}
            id={projectItem.id}
            description={projectItem.description}
            key={projectItem.id}
          />
        ))}
      </div>
      
      {/* Project display - Show on all screens */}
      <div className="my-32 grid gap-6">
        <h2 className="font-montserrat text-4xl text-primary lg:text-6xl">
          {project.title}
        </h2>
        <p className="text-2xl">{project.description}</p>
      </div>
      
      {/* Original desktop layout - Hidden on mobile */}
      <div className="relative -mb-36 hidden md:grid grid-cols-4 gap-7">
        {PROJECTS.slice(4, 8).map((projectItem) => (
          <ProjectCard
            className="col-span-2 lg:col-span-1"
            title={projectItem.title}
            id={projectItem.id}
            description={projectItem.description}
            key={projectItem.id}
          />
        ))}
      </div>
    </SectionContainer>
  );
};