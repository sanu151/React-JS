// import React from "react";

const AddBlog = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="body">Blog Body</label>
          <textarea name="body" id="body"></textarea>
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
