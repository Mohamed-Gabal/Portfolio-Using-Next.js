import { blogPosts } from "@/data/blog";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="pt-16 pb-16">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My Latest <span className="text-cyan-200">Blogs</span>
      </h2>

      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-delay="300"
        className="w-[90%] xl:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-4 items-start mt-16"
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};
export default Blog;