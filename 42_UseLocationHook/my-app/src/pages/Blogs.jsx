import { useState } from "react";

import { blogData } from "./data";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs] = useState(blogData);
  const sliceStr = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <section>
      {blogs.map((blog) => {
        const { id, title, body } = blog;
        return (
          <article key={id}>
            <h3>{title}</h3>
            <p>{sliceStr(body, 80)}</p>
            <Link to={title} state={{ id, title, body }}>
              Learn More
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Blogs;
