"use client";
import { useProject } from "~/hooks/use-project";
import { cn } from "~/lib/utils";
import {
  Database,
  BookOpen,
  DollarSign,
  GraduationCap,
  Shield,
  BarChart2,
  Leaf,
  Search,
} from "lucide-react";

interface ProjectCardProps {
  title: string;
  id: number;
  description: string;
  className?: string;
}

const getProjectIcon = (id: number, isSelected: boolean) => {
  const iconClass = cn(
    "h-8 w-8",
    isSelected ? "text-white" : "text-secondary group-hover:text-white"
  );

  switch (id) {
    case 1:
      return <Database className={iconClass} />;
    case 2:
      return <BookOpen className={iconClass} />;
    case 3:
      return <DollarSign className={iconClass} />;
    case 4:
      return <GraduationCap className={iconClass} />;
    case 5:
      return <Shield className={iconClass} />;
    case 6:
      return <BarChart2 className={iconClass} />;
    case 7:
      return <Leaf className={iconClass} />;
    case 8:
      return <Search className={iconClass} />;
    default:
      return <Database className={iconClass} />;
  }
};

export const ProjectCard = ({
  title,
  id,
  description,
  className,
}: ProjectCardProps) => {
  const { project, setProject } = useProject();
  const isSelected = project.id === id;

  return (
    <div
      className={cn(
        "group flex h-auto cursor-pointer flex-col items-center justify-center rounded-lg border-4 border-secondary bg-white px-5 pb-4 pt-8 shadow-lg transition-colors duration-300 hover:bg-secondary",
        className,
        isSelected && "bg-secondary text-white border-primary",
      )}
      onClick={() => setProject({ id, title, description })}
    >
      <div className="mb-4">{getProjectIcon(id, isSelected)}</div>
      <p
        className={cn(
          "text-center font-montserrat text-lg text-primary group-hover:text-white sm:text-xl lg:text-2xl",
          isSelected && "text-white",
        )}
      >
        {title}
      </p>
      <p className="mt-2 text-left text-sm group-hover:text-white">See more</p>
    </div>
  );
};
