import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{blog.title}</h1>
      {blog.image && (
        <img src={`http://localhost:5000/${blog.image}`} alt="" width="300" />
      )}
      <p>{blog.content}</p>
    </div>
  );
}

export default Blog;
