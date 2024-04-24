import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();

  console.log(blogs);
  return <section id="blogs" className="mb-10"></section>;
};

export default Blogs;
