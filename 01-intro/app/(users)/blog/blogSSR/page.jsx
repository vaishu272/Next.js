export default async function BlogSSR() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // 🔥 forces SSR
  });

  const posts = await res.json();

  return (
    <div>
      <h1>SSR Blog</h1>
      {posts.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
