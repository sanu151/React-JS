import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
        ducimus nam porro autem quibusdam temporibus facere illum excepturi
        explicabo. Earum, odit adipisci nihil voluptate delectus minus
        voluptatem neque commodi illo officia, beatae tempora voluptatum esse
        fugit quis. Sit dolorum quas quae expedita. Hic quam fuga tenetur natus
        maiores veritatis ipsum.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos impedit
        amet, sapiente cum dicta quo magnam esse nam. Voluptates suscipit vero
        iure aut pariatur cumque tempore, provident aperiam corrupti ex soluta
        ad accusamus ipsam voluptate porro magni? Eum, id quasi. Culpa illo,
        eaque voluptates sit, minima blanditiis expedita rem voluptatem harum
        aperiam cumque doloremque officiis maiores nesciunt quia reiciendis.
        Culpa.
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

export default Contact;
