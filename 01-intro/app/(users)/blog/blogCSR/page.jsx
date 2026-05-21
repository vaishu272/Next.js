"use client";

import { useEffect, useState } from "react";

export default function BlogCSR() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      <h1>CSR Blog</h1>
      {posts.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
