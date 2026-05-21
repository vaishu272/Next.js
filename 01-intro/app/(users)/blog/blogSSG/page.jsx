export default async function BlogSSG() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache", // default → SSG
  });

  const posts = await res.json();

  return (
    <div>
      <h1>SSG Blog</h1>
      {posts.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
