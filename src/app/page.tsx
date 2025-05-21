import Hero from "@/components/modules/hero/Hero";
import SkillHighlights from "@/components/modules/skill/SkillHighlights";
import About from "@/components/modules/About/About";
import { getAllSkill } from "@/services";
import { TBlog, TProject, TSkillCategory } from "@/types/globalTypes";
import Education from "@/components/modules/Education/Education";
import Contact from "@/components/modules/contact/Contact";
import { getAllProject } from "@/services/project";
import ProjectCard from "@/components/modules/project/ProjectCard";
import Link from "next/link";
import { getAllBlog } from "@/services/blog";
import BlogCart from "@/components/modules/blog/BlogCart";

export default async function Home() {
  const { data: skills } = await getAllSkill();
  const { data: project } = await getAllProject();
  const { data: blogs } = await getAllBlog();
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <SkillHighlights skills={skills as TSkillCategory[]} />

      <div className="py-5 md:py-16 " id="projects">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
          <span className="text-black dark:text-white text-shadow">
            Projects
          </span>
        </h3>
        <div className="custom-container grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 px-2">
          {project?.slice(0, 3)?.map((project: TProject, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <Link href="/projects">
            <button className="cursor-pointer px-3 py-2 text-lg font-semibold rounded-lg transition-all duration-300 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-105 hover:shadow-lg">
              All Projects
            </button>
          </Link>
        </div>
      </div>
      {/* blogs  */}
      <div className="py-5 md:py-16 " id="blogs">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
          <span className="text-black dark:text-white text-shadow">Blogs</span>
        </h3>
        <div className="custom-container grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 px-2">
          {blogs?.slice(0, 3)?.map((blog: TBlog, index: number) => (
            <BlogCart key={index} blog={blog} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <Link href="/blogs">
            <button className="cursor-pointer px-3 py-2 text-lg font-semibold rounded-lg transition-all duration-300 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-105 hover:shadow-lg">
              All Blogs
            </button>
          </Link>
        </div>
      </div>

      <div className="py-5 md:py-16 " id="contact">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          <span className="text-black dark:text-white text-shadow">
            Contact
          </span>
        </h3>
        <Contact />
      </div>
    </div>
  );
}
