import React, { useState } from "react";

const ChildInput = (props) => {
  const [data, setData] = useState({ name: "", comment: "" });
  const { name, comment } = data;

  const handleChange = (e) => {
    const name = e.target.name;
    setData((oldData) => {
      return { ...oldData, [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddComment(data);
    setData({ name: "", comment: "" });
  };

  return (
    <div>
      <h2>Child Input</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="comment">Your Comment : </label>
          <textarea
            name="comment"
            id="comment"
            onChange={handleChange}
            value={comment}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChildInput;
