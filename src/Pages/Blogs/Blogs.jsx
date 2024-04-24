import { useLoaderData } from "react-router-dom";
import Blog from "./Blog/Blog";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const blogs = useLoaderData();

  //   console.log(blogs);
  return (
    <section
      data-aos="zoom-in-up"
      id="blogs"
      className="mb-10 max-w-[1280px] mx-auto"
    >
      <Helmet>
        <title>House Rent | Blogs</title>
      </Helmet>
      {blogs?.length &&
        blogs?.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </section>
  );
};

export default Blogs;
