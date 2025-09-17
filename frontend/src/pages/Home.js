import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data));
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <Link to={`/blog/${blog._id}`}>
            <h2>{blog.title}</h2>
          </Link>
          {blog.image && (
            <img
              src={`http://localhost:5000/${blog.image}`}
              alt=""
              width="200"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
