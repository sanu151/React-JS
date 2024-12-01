import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:5174/posts");
    setPosts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <h1>App</h1>
        <section>
          {posts.map((post) => {
            return (
              <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;
