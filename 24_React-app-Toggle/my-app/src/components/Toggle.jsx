import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          itaque cum fugiat! Atque dicta, fuga quaerat quo id enim molestias
          perferendis corporis veniam qui quae praesentium, dolor suscipit
          sapiente dolore totam ex consequatur corrupti odio expedita. Autem
          dignissimos exercitationem aliquid, praesentium quae nostrum unde. At,
          sint nemo. Placeat numquam sit harum necessitatibus officia dicta
          laudantium ea omnis. Modi, neque nam illum doloremque odit quaerat.
          Facilis in at deserunt ex possimus accusantium consequuntur alias
          numquam sit est consectetur provident magnam officiis magni,
          voluptatibus temporibus debitis nobis eius, corporis, dolore sequi.
          Consequatur culpa illo maxime doloremque iste eius explicabo pariatur
          commodi natus cum a fuga omnis maiores amet nobis, esse veritatis
          assumenda quisquam soluta porro ducimus. Explicabo obcaecati provident
          enim. Illo reprehenderit voluptate possimus voluptatum dicta hic
          numquam quaerat! Debitis ratione perferendis maiores esse saepe.
          Dolore, facere magni! Eaque quisquam quis et, earum numquam esse
          libero mollitia rerum adipisci. Harum quidem nesciunt nihil tempore
          laborum natus nisi tempora, commodi, beatae quo tenetur minus ut
          laboriosam facilis. Ea quam quis temporibus deserunt dolor? Provident,
          aspernatur nobis, ullam a fugit impedit at recusandae maxime
          reiciendis eligendi id corporis eum neque accusantium voluptates.
          Nulla dicta omnis aliquam quia voluptatum porro delectus illum. Est,
          sapiente fuga.
        </p>
      )}
      {!toggle && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          itaque cum fugiat! Atque ... See more....
        </p>
      )}
      <div>
        <button
          className="btn"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
