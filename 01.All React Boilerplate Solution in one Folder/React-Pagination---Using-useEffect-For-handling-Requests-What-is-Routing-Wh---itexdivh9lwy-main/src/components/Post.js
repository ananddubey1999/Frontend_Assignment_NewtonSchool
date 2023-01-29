import React from "react";
const Post = ({ ele }) => {
  return (
    <div className="post">
      <h3>{ele.title}</h3>
      <p>{ele.body}</p>
    </div>
  );
};

export { Post };
