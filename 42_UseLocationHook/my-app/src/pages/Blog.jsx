import { Link, useLocation, useParams } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
  return (
    <div>
      <h2>{title}</h2>
      <p>{location.state.body}</p>
      <button>
        <Link to="/blogs">Return to Blogs</Link>
      </button>
    </div>
  );
};

export default Blog;
