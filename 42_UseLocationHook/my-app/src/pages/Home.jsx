import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Sanu&apos;s Blog</h1>
      <p>
        {"    "}
        We&apos;re passionate about sharing knowledge and inspiring curiosity.
        Our blog explores a diverse range of topics, from cutting-edge
        technology and global travel to personal well-being and intellectual
        pursuits. Whether you&apos;re interested in the latest gadgets, seeking
        travel inspiration, or looking to improve your health and lifestyle,
        you&apos;ll find insightful articles and engaging content on our
        platform.
      </p>

      <p>
        {"    "}
        Our mission is to provide informative and engaging content that empowers
        our readers. We strive to keep you updated on the latest trends, share
        practical tips, and spark thought-provoking discussions. Join us on this
        journey of discovery as we explore the fascinating world around us.
      </p>
      <button>
        <Link to="/blogs">Go To Blogs Page</Link>
      </button>
    </div>
  );
};

export default Home;
