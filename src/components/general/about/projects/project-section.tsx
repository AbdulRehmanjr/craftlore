"use client";
import { useState } from "react";
import { PROJECTS } from "~/constants/data";
import { useProject } from "~/hooks/use-project";
import { ProjectCard } from "~/components/general/about/projects/project-card";
import { Container } from "~/components/common/container";
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
    <Container className="col-span-12 mt-8 sm:mt-12 md:mt-16 lg:mt-20 gap-4">
      {/* Mobile: Only show dropdown */}
      <div className="md:hidden w-full max-w-md mx-auto mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-medium text-primary mb-2">Select a Project</h3>
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
      <Container className="relative -mt-24 sm:-mt-28 md:-mt-32 lg:-mt-36 hidden md:grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.slice(0, 4).map((projectItem) => (
          <ProjectCard
            className="col-span-1"
            title={projectItem.title}
            id={projectItem.id}
            description={projectItem.description}
            key={projectItem.id}
          />
        ))}
      </Container>
      
      {/* Project display - Matching project section styles */}
      <Container className="my-8 sm:my-12 md:my-20 lg:my-32 grid gap-4 sm:gap-5 md:gap-6">
        <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary leading-tight">
          {project.title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">{project.description}</p>
      </Container>
      
      {/* Original desktop layout - Hidden on mobile */}
      <Container className="relative -mb-24 sm:-mb-28 md:-mb-32 lg:-mb-36 hidden md:grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.slice(4, 8).map((projectItem) => (
          <ProjectCard
            className="col-span-1"
            title={projectItem.title}
            id={projectItem.id}
            description={projectItem.description}
            key={projectItem.id}
          />
        ))}
      </Container>
    </Container>
  );
};