import ProjectCard from "@/components/modules/project/ProjectCard";
import { getAllProject } from "@/services/project";
import { TProject } from "@/types/globalTypes";

import React from "react";

const AllProjectPage = async () => {
  const { data: project } = await getAllProject();
  return (
    <div className="custom-container grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 px-2 py-16">
      {project?.map((project: TProject, index: number) => (
        <ProjectCard key={index} project={project} />
      ))}
     
    </div>
  );
};

export default AllProjectPage;
