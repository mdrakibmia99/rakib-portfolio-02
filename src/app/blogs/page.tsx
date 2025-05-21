import BlogCart from "@/components/modules/blog/BlogCart";
import { getAllBlog } from "@/services/blog";
import { TBlog } from "@/types/globalTypes";


export default async function BlogPage() {
  const {data:blogs} = await getAllBlog();

  return (


       <div className="custom-container grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-12 px-2 py-16">
          {blogs?.map((blog:TBlog, index:number) => (
            <BlogCart key={index} blog={blog} />
          ))}
        </div>

  );
}

