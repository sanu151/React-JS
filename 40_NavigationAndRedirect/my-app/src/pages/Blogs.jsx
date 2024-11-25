import { useNavigate } from "react-router-dom";
const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Blog Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at soluta
        totam omnis doloremque asperiores.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        laudantium accusantium sed dicta? Eveniet atque quasi quo fugit
        voluptates, reprehenderit adipisci aliquam ab placeat, dignissimos magni
        exercitationem voluptas aperiam porro quia dolor aliquid voluptatibus
        repellat officiis pariatur labore tempore! Hic!
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Blogs;
