import React from "react";
import Card from "./Card";

const ListBlogs = (props) => {
  return (
    <div>
      {props.blogs.map((blog, index) => {
        return (
          <Card
            img={blog.img}
            title={blog.title}
            summary={blog.summary}
            link={blog.link}
          />
        );
      })}
    </div>
  );
};

export default ListBlogs;
