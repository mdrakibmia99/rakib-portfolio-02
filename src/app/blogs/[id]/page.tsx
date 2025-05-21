
import BlogDetails from "@/components/modules/blog/BlogDetails";
import { getSpecificBlog } from "@/services/blog";
import { IBlog } from "@/utils/globalTypes";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BlogPage = async ({ params }: ProjectPageProps) => {
  const { id } = await params;
  const { data: blog } = await getSpecificBlog(id);

  return (
    <div>
      
        <BlogDetails blog={blog as IBlog} />

    </div>
  );
};

export default BlogPage;
