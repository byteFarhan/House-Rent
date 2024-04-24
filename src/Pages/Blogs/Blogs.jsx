import { useLoaderData } from "react-router-dom";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  //   console.log(blogs);
  return (
    <section
      data-aos="zoom-in-up"
      id="blogs"
      className="mb-10 max-w-[1280px] mx-auto"
    >
      {blogs?.length &&
        blogs?.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </section>
  );
};

export default Blogs;
