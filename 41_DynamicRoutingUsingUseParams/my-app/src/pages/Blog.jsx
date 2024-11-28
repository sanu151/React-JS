import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "./Data";
const Blog = () => {
  const { title } = useParams();
  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    const blogBody = blogData.filter((blog) => blog.title === title);
    setBodyData(blogBody[0].body);
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{bodyData}</p>
    </div>
  );
};

export default Blog;
