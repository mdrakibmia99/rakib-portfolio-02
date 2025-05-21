
import ProjectDetails from "@/components/modules/project/ProjectDetails";
import { getSpecificProject } from "@/services";
import { TProject } from "@/utils/globalTypes";


interface ProjectPageProps {
    params: Promise<{
      id: string;
    }>;
  }

const ProjectPage = async ({ params }:ProjectPageProps) => {
  const { id } =await params;
  const { data: project } = await getSpecificProject(id);

  return (
    <div>
      <div>
        <ProjectDetails project={project as TProject} />
      </div>
    </div>
  );
};

export default ProjectPage;
